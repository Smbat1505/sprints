import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {AddItemForm} from './AddItemForm';
import {AppBar, Button, Container, Grid, Paper, Toolbar, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton/IconButton";
import {Menu} from "@mui/icons-material";
import {
    addTaskAC,
    changeFilterAC,
    changeTaskStatusAC,
    changeTaskTitleAC,
    removeTaskAC,
    tasksReducer
} from "./reducers/tasks-reducer";


export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function App() {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ])


    //
    // let [tasks, setTasks] = useState<TasksStateType>({
    //     [todolistId1]: [
    //         {id: v1(), title: "HTML&CSS", isDone: true},
    //         {id: v1(), title: "JS", isDone: true}
    //     ],
    //     [todolistId2]: [
    //         {id: v1(), title: "Milk", isDone: true},
    //         {id: v1(), title: "React Book", isDone: true}
    //     ]
    // });

    const [taskState, dispatchTask] = useReducer(tasksReducer, {
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: false}
        ],
        [todolistId2]: [
            {id: v1(), title: "Milk", isDone: false},
            {id: v1(), title: "React Book", isDone: true}
        ]
    });

    function removeTask(idToRemove: string, todolistId: string) {
        // Достаем нужный массив задач по todolistId:
        // const todolistTasks = tasks[todolistId];

        // Фильтруем массив задач, оставляя только те, у которых id не равен idToRemove:
        // const filteredTasks = todolistTasks.filter(task => task.id !== idToRemove);

        // Перезаписываем в объекте tasks массив для нужного todolistId отфильтрованным массивом:
        // tasks[todolistId] = filteredTasks;

        // Создаем копию объекта tasks с обновленным массивом задач для указанного todolistId.
        // Это необходимо, чтобы React обнаружил изменение и обновил интерфейс.
        // setTasks({...tasks});
        dispatchTask(removeTaskAC(idToRemove, todolistId))
    }


    function addTask(title: string, todolistId: string) {
        // Создаем новую задачу с уникальным id и переданным заголовком:
        // const newTask = {id: v1(), title: title, isDone: false};

        // Достаем текущий массив задач по todolistId:
        // const todolistTasks = tasks[todolistId];

        // Создаем новый массив задач, добавляя в начало новую задачу:
        // const updatedTasks = [newTask, ...todolistTasks];

        // Обновляем объект tasks с новым массивом задач для указанного todolistId.
        // Это необходимо, чтобы React обнаружил изменение и обновил интерфейс.
        // tasks[todolistId] = updatedTasks;

        // Создаем копию объекта tasks и заменяем старый объект на обновленный.
        // setTasks({...tasks});
        const trimmedTitle = title.trim(); // Remove leading and trailing whitespace

        dispatchTask(addTaskAC(trimmedTitle, todolistId));
    }


    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        // Достаем нужный массив по todolistId:
        // const todolistTasks = tasks[todolistId];

        // Изменяем статус нужной задачи, если она найдена:
        // const updatedTasks = todolistTasks.map(task =>
        // task.id === id ? {...task, isDone: isDone} : task
        // );

        // Обновляем объект tasks с обновленным массивом задач для указанного todolistId.
        // Это необходимо, чтобы React обнаружил изменение и обновил интерфейс.
        // tasks[todolistId] = updatedTasks;

        // Создаем копию объекта tasks и заменяем старый объект на обновленный.
        // setTasks({...tasks});

        dispatchTask(changeTaskStatusAC(id, isDone, todolistId))
    }


    function changeTaskTitle(id: string, newTitle: string, todolistId: string) {
        // Достаем нужный массив по todolistId:
        // const todolistTasks = tasks[todolistId];

        // Изменяем заголовок нужной задачи, если она найдена:
        // const updatedTasks = todolistTasks.map(task =>
        //     task.id === id ? {...task, title: newTitle} : task
        // );

        // Обновляем объект tasks с обновленным массивом задач для указанного todolistId.
        // Это необходимо, чтобы React обнаружил изменение и обновил интерфейс.
        // tasks[todolistId] = updatedTasks;

        // Создаем копию объекта tasks и заменяем старый объект на обновленный.
        // setTasks({...tasks});

        dispatchTask(changeTaskTitleAC(id, newTitle, todolistId))
    }


    function changeFilter( todolistId: string, value: FilterValuesType,) {
        // Обновляем тудулисты, используя метод map:
        // const updatedTodolists = todolists.map(todolist =>
        //     todolist.id === todolistId ? {...todolist, filter: value} : todolist
        // );

        // Обновляем список тудулистов с обновленными данными:
        // setTodolists(updatedTodolists);
        dispatchTask(changeFilterAC(todolistId, value));
    }


    function removeTodolist(id: string) {
        // Удаляем тудулист из списка, используя метод filter:
        // const updatedTodolists = todolists.filter(todolist => todolist.id !== id);

        // Обновляем список тудулистов с обновленными данными:
        // setTodolists(updatedTodolists);

        // Удаляем задачи для удаленного тудулиста из объекта tasks:
        // const updatedTasks = {...tasks};
        // delete updatedTasks[id]; // Удаляем свойство с соответствующим id

        // Обновляем объект tasks с обновленными данными задач:
        // setTasks(updatedTasks);
    }

    function changeTodolistTitle(id: string, title: string) {
        // Находим нужный todolist по его id и создаем новый массив с обновленным заголовком:
        // const updatedTodolists = todolists.map(todolist =>
        //     todolist.id === id ? {...todolist, title: title} : todolist
        // );

        // Обновляем список todolist'ов с обновленными данными:
        // setTodolists(updatedTodolists);
    }

    function addTodolist(title: string) {
        // Генерируем уникальный id для нового тудулиста:
        // const newTodolistId = v1();

        // Создаем новый тудулист с указанным заголовком и фильтром по умолчанию:
        // const newTodolist: TodolistType = {
        //     id: newTodolistId,
        //     title: title,
        //     filter: 'all'
        // };

        // Обновляем список тудулистов, добавляя новый тудулист в начало массива:
        // setTodolists([newTodolist, ...todolists]);

        // Создаем новую пустую коллекцию задач для нового тудулиста:
        // setTasks({
        //     ...tasks,
        //     [newTodolistId]: []
        // });
    }


    return (
        <div className="App">
            <div>
                <div>
                    <AddItemForm addItem={addTodolist}/>
                </div>
                <div>
                    {
                        todolists.map(tl => {
                            let allTodolistTasks = taskState[tl.id];
                            let tasksForTodolist = allTodolistTasks;

                            if (tl.filter === "active") {
                                tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                            }
                            if (tl.filter === "completed") {
                                tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                            }

                            return <div key={tl.id}>
                                <div style={{padding: "10px"}}>
                                    <Todolist
                                        key={tl.id}
                                        id={tl.id}
                                        title={tl.title}
                                        tasks={tasksForTodolist}
                                        removeTask={removeTask}
                                        changeFilter={changeFilter}
                                        addTask={addTask}
                                        changeTaskStatus={changeStatus}
                                        filter={tl.filter}
                                        removeTodolist={removeTodolist}
                                        changeTaskTitle={changeTaskTitle}
                                        changeTodolistTitle={changeTodolistTitle}
                                    />
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
