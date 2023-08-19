import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

export type FilterValueType = 'all' | 'active' | 'completed';

function App() {

    const [tasks, setTasks] = useState<TaskType[]>(
        [
            {id: 1, title: 'HTML&CSS', isDone: true},
            {id: 2, title: 'JS&TS', isDone: true},
            {id: 3, title: 'ReactJS/TS', isDone: false},
            {id: 4, title: 'Rest IP', isDone: false},
            {id: 5, title: 'GraphQL', isDone: false},
        ]
    );

    const [filter, setFilter] = useState<FilterValueType>('all');


    function removeTask(taskID: number) {
        let filteredTasks = tasks.filter(task => task.id !== taskID);
        setTasks(filteredTasks);
    }

    let tasksForTodolist = tasks;
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(task => task.isDone)
    }

    function changeFilter(value: FilterValueType) {
        setFilter(value)
    }

    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
