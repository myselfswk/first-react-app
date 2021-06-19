import React, { useEffect, useState } from 'react';
import './CounterApp.css';

function CounterApp() {

    const [number, setNumber] = useState(0);

    function increament() {
        setNumber(
            number + 1
        );
    }

    function decreament() {
        setNumber(
            number - 1
        )
    }

    useEffect(() => {
        if (number === 5) {
            alert("Assalam-u-alaikum, number reaches 5");
            setNumber(0)
        }
    });

    return (
        <div className="App">
            <h1>Counter App by Muhammad Waleed Khan</h1>
            <h1>{
                number > -1 ?
                    number
                    : null
            }</h1>
            <button className="btn-inc" onClick={increament}>+</button>
            <button className="btn-inc" onClick={decreament}>-</button>
        </div>
    )
}

export default CounterApp;
