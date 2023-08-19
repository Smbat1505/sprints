// исходный стейт
// какой тип действия хотим выполнить
// данные, необходимые для выполнения действия

// {type: , payload) => action
import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

export type RemoveTodoListAT = {
    type: "REMOVE-TODOLIST",
    id: string
}
export type addTodolistAT = {
    type: "ADD-TODOLIST",
    title: string
    id: string
}
export type changeTodolistTitleAT = {
    type : "CHANGE-TODOLIST-TITLE"
    id: string
    title: string
}
type changeTodolistFilterAT = {
    type: "CHANGE-TODOLIST-FILTER"
    filter: FilterValuesType
    todolistId: string
}

export type ActionType = RemoveTodoListAT | addTodolistAT | changeTodolistTitleAT | changeTodolistFilterAT

export const todolistReducer = (todolists: TodolistType[], action: ActionType): TodolistType[] => {
    switch (action.type) {

        case "REMOVE-TODOLIST" :
            return todolists.filter(tl => tl.id != action.id)

        case "ADD-TODOLIST" :
                let newTodolist: TodolistType = {
                    id: action.id,
                    title: action.title,
                    filter: 'all'};
                return [...todolists, newTodolist]

        case "CHANGE-TODOLIST-TITLE" :
            return todolists.map(tl => tl.id === action.id?
                {...tl, title: action.title} : tl)

        case "CHANGE-TODOLIST-FILTER" :
            const updatedTodolists = todolists.map(tl => tl.id === action.todolistId ? {...tl, filter: action.filter} : tl)
            return updatedTodolists

        default:
            return todolists
    }
}