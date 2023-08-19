import React from 'react';
import {BancnoteType} from "../App";


type ButtonType = {
    name: BancnoteType
    callback: (buttonName: BancnoteType) => void
}
export const Button: React.FC<ButtonType> = ({name,callback}) => {

    function handleOnClickFilter() {
        callback(name)
    }

    return (
        <button onClick={handleOnClickFilter}>{name}</button>
    )
}