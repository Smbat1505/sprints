import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    const task1 = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS&TS', isDone: true},
        {id: 3, title: 'ReactJS/TS', isDone: false}
    ];
    const task2 = [
        {id: 1, title: 'Hello world', isDone: true},
        {id: 2, title: 'I am happy', isDone: false},
        {id: 3, title: 'Hol', isDone: false},
    ]
    return (
        <div className="App">
            <Todolist title={'What to learn'} task={task1}/>
            <Todolist title={'What'} task={task2}/>
        </div>
    );
}

export default App;
