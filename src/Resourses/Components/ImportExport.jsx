import React from 'react';

const name = "Muhammad Waleed Khan";

function ImportExport() {
    return (
        <div>
            <h1>Import & Export Componenet by {name}</h1>
        </div>
    )
}

function Mul(num1, num2) {
    return num1 * num2;
}

function Add(num1, num2) {
    return num1 + num2;
}

export default ImportExport;
export {
    Mul,
    Add
}
