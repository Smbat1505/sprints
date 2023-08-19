import React from 'react';
import {BancnoteArrType} from "../App";


type CurrentMoneyType = {
    currentMoney: BancnoteArrType[],
}
export const CurrentMoney: React.FC<CurrentMoneyType> = (currentMoney) => {
    console.log(currentMoney)
    return (
        <ul>
            {currentMoney.currentMoney.map((moneyArr, i) => {
                return (
                    <li key={i}>
                        <span>banknote: {moneyArr.banknote}</span>
                        <br/>
                        <span>value: {moneyArr.value}</span>
                        <br/>
                        <span>number: {moneyArr.number}</span>
                        <hr/>
                    </li>

                )
            })}
        </ul>
    )
}