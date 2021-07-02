import React from 'react';

function SpreadOperatorEcma() {

    const fruits = ["Mango", "Banana", "Orange"];
    const moreFruits = [...fruits, "Watermelon", "guava", "MuskMelon"];

    console.log(moreFruits);

    const infoOne = {
        id: 1,
        name: "Waleed Khan",
        age: 22
    }

    const infoTwo = {
        ...infoOne,
        course: "MERN Stact",
        university: "Iqra University"
    }

    console.log(infoTwo);

    return (
        <div>
            <h1>Spread Operator EcmaScript</h1>
        </div>
    )
}

export default SpreadOperatorEcma;
