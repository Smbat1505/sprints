import {FilterValuesType, TasksStateType} from "../App";
import {v1} from "uuid";

export type ActionTasksReducerType =
    | RemoveTaskACType
    | AddTaskACType
    | ChangeStatusACType
    | ChangeTaskTitleACType
    | ChangeFilterACType; // Add the new action type here
export const tasksReducer = (state: TasksStateType, action: ActionTasksReducerType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK": {
            const {todolistId, idToRemove} = action.payload;
            return {
                ...state,
                [todolistId]: state[todolistId].filter(task => task.id !== idToRemove)
            }
        }

        case "ADD-TASK": {
            const {title, todolistId} = action.payload;
            const newTask = {id: v1(), title: title, isDone: false};
            return {
                ...state,
                [todolistId]: [newTask, ...state[todolistId]],

            }
        }

        case "CHANGE-STATUS": {
            const {
                id,
                isDone,
                todolistId,
            } = action.payload;

            return {
                ...state,
                [todolistId]: state[todolistId].map(task => (task.id === id ? {...task, isDone} : task))
            }
        }

        case "CHANGE-TASK-TITLE": {
            const {
                id,
                newTitle,
                todolistId
            } = action.payload
            return {
                ...state,
                [todolistId]: state[todolistId].map(task => task.id === id ? {...task, title: newTitle} : task)
            }

        }
        case "CHANGE-FILTER": {
                // const tasksForTodolist =
                //     props.filter === "active"
                //         ? props.tasks.filter((t) => !t.isDone)
                //         : props.filter === "completed"
                //             ? props.tasks.filter((t) => t.isDone)
                //             : props.tasks;
                //

            const {todolistId, value} = action.payload;
            return {
                ...state,
                [todolistId]: state[todolistId].map((todolist =>
                        todolist.id === todolistId ? {...todolist, filter: value} : todolist
                ))
            };
        }

        default : {
            return state
        }
    }
}


type RemoveTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (idToRemove: string, todolistId: string) => {
    return {
        type: 'REMOVE-TASK',
        payload: {
            idToRemove,
            todolistId
        }
    } as const
}


type AddTaskACType = ReturnType<typeof addTaskAC>;
export const addTaskAC = (title: string, todolistId: string) => {
    return {
        type: 'ADD-TASK',
        payload: {
            title,
            todolistId
        }
    } as const
}


type ChangeStatusACType = ReturnType<typeof changeTaskStatusAC>;
export const changeTaskStatusAC = (id: string, isDone: boolean, todolistId: string) => {
    return {
        type: 'CHANGE-STATUS',
        payload: {
            id,
            isDone,
            todolistId
        }
    } as const
}

type ChangeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>;

export const changeTaskTitleAC = (id: string, newTitle: string, todolistId: string) => {
    return {
        type: 'CHANGE-TASK-TITLE',
        payload: {
            id,
            newTitle,
            todolistId
        }
    } as const
}
type ChangeFilterACType = ReturnType<typeof changeFilterAC>;

export const changeFilterAC = (todolistId: string, value: FilterValuesType) => {
    return {
        type: 'CHANGE-FILTER',
        payload: {
            todolistId,
            value
        }
    } as const;
};