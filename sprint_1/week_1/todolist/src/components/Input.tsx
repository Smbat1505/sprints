import React from 'react';


type InputPropsType ={
    type?: string | undefined;
    checked?: boolean | undefined;
    // name: string;
}
export const Input: React.FC<InputPropsType> = (
    {
        type,
        checked
    }
) => {
    return (
        <>
            <input type={type} checked={checked}/>
        </>
    )
}