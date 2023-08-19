import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {CurrentMoney} from "./component/CurrentMoney";
import {Button} from "./component/Button";

export type BancnoteType = 'All' | 'Dollar' | 'Ruble'
export type BancnoteArrType = {
    banknote: BancnoteType,
    value: number,
    number: string,
}


function App() {
    const [money, setMoney] = useState<Array<BancnoteArrType>>([
        {banknote: 'Dollar', value: 100, number: ' a1234567890'},
        {banknote: 'Dollar', value: 50, number: ' z1234567890'},
        {banknote: 'Ruble', value: 100, number: ' w1234567890'},
        {banknote: 'Dollar', value: 100, number: ' e1234567890'},
        {banknote: 'Dollar', value: 50, number: ' c1234567890'},
        {banknote: 'Ruble', value: 100, number: ' r1234567890'},
        {banknote: 'Dollar', value: 50, number: ' x1234567890'},
        {banknote: 'Ruble', value: 50, number: ' v1234567890'},
    ]);

    const [filter, setFilter] = useState('All');

    let currentMoney = money;
    if (filter === 'Dollar') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'Dollar'
        )
    }
    ;
    if (filter === 'Ruble') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'Ruble')
    }
    ;


    function handleOnClickFilter(nameButton: BancnoteType) {
        setFilter(nameButton)
    }

    return (
        <div className="App">

            <CurrentMoney currentMoney={currentMoney}/>

            <Button name={'All'} callback={handleOnClickFilter}/>
            <Button name={'Dollar'} callback={handleOnClickFilter}/>
            <Button name={'Ruble'} callback={handleOnClickFilter}/>
        </div>
    );
}

export default App;
