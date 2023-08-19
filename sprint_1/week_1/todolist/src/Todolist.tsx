import React from 'react';
import {Input} from "./components/Input";
import {Button} from "./components/Button";

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}

export type TodolistPropsType = {
    title: string;
    task: TaskType[];
}


export const Todolist: React.FC<TodolistPropsType> = (
    {
        title,
        task
    }
) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <Input/>
                <Button name={'add'}/>
            </div>
            <ul>
                <li>
                    <Input type="checkbox" checked={task[0].isDone}/>
                    <span>{task[0].title}</span>
                </li>
                <li>
                    <Input type="checkbox" checked={task[1].isDone}/>
                    <span>{task[1].title}</span>
                </li>
                <li>
                    <Input type="checkbox" checked={task[2].isDone}/>
                    <span>{task[2].title}</span>
                </li>

            </ul>
            <div>
                <Button name={'All'}/>
                <Button name={'Active'}/>
                <Button name={'Completed'}/>
            </div>
        </div>
    )
}