import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (todolistId: string, value: FilterValuesType ) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    filter: FilterValuesType
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
}

export function Todolist(props: PropsType) {
    const addTask = (title: string) => {
        props.addTask(title, props.id);
    }

    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }
    const changeTodolistTitle = (title: string) => {
        props.changeTodolistTitle(props.id, title);
    }
    const x = () => {
      
    }

    const onAllClickHandler = () => props.changeFilter( props.id, "all");
    const onActiveClickHandler = () => props.changeFilter(props.id, "active" );
    const onCompletedClickHandler = () => props.changeFilter(props.id, "completed");

    const buttonStyle = {
        border: '1px solid #000',
        backgroundColor: 'transparent',
        color: 'inherit',
    };

    return <div>
        <h3><EditableSpan value={props.title} onChange={changeTodolistTitle}/>

            <button onClick={removeTodolist}>x</button>
            {/*<IconButton onClick={removeTodolist}>*/}
            {/*    <Delete />*/}
            {/*</IconButton>*/}
        </h3>
        <AddItemForm addItem={addTask}/>
        <div>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }
                    const onTitleChangeHandler = (newValue: string) => {
                        props.changeTaskTitle(t.id, newValue, props.id);
                    }


                    return <div key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" checked={t.isDone}
                               onChange={onChangeHandler}/>

                        <EditableSpan value={t.title} onChange={onTitleChangeHandler}/>

                        <button onClick={onClickHandler}>x</button>
                    </div>
                })
            }
        </div>
        <div>
            <button
                onClick={onAllClickHandler}
            >All
            </  button>
            <button
                onClick={onActiveClickHandler}
                >Active
            </button>
            <button
                onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}


