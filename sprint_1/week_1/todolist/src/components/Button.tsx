import React from 'react';

type ButtonPropsType = {
    name: string
}

export const Button: React.FC<ButtonPropsType> = (
    {
        name
    }
) => {
    return (
        <>
            <button>{name}</button>
        </>
    )
}