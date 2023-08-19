import React from 'react';
import {Input} from "./components/Input";
import {Button} from "./components/Button";
import "./todolist.css"
import {FilterValueType} from "./App";

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}

export type TodolistPropsType = {
    title: string;
    tasks: TaskType[];
    removeTask: (taskID: number) => void;
    changeFilter: (value: FilterValueType) => void;
}


export const Todolist: React.FC<TodolistPropsType> = (
    {
        title,
        tasks,
        removeTask,
        changeFilter
    }
) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <Input/>
                <Button
                    name={'add'}
                    callback={() => {
                    }}
                />
            </div>
            <ul>
                {tasks.map(task => {
                    return (
                        <li key={task.id}>
                            <Input
                                type="checkbox"
                                checked={task.isDone}
                            />
                            <span>{task.title}</span>
                            <Button
                                className={'dell'}
                                callback={
                                    () => {
                                        removeTask(task.id)
                                    }
                                }>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                                     viewBox="0 0 30 30">
                                    <path
                                        d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                                </svg>
                            </Button>

                        </li>
                    )
                })}
            </ul>
            <div>
                <Button
                    name={'All'}
                    callback={
                        () => {
                            changeFilter('all')
                        }
                    }/>
                <Button
                    name={'Active'}
                    callback={
                        () => {
                            changeFilter('active')
                        }
                    }/>
                <Button
                    name={'Completed'}
                    callback={
                        () => {
                            changeFilter('completed')
                        }
                    }/>
            </div>
        </div>
    )
}