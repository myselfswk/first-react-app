import React from 'react';

function Hoisting() {

    console.log(name);
    console.log(pi);

    //Hoisting and temporal dead zone are 2 important concepts that influence the lifecycle of JavaScript variables.
    //Accessing 'name' before declaration evaluates to undefined. A hoisted var variable, before its initialization, has an undefined value.

    var name = "Waleed Khan";
    const pi = 3.142;

    //However, accessing pi before the declaration line throws a ReferenceError. const variables are in a temporal dead zone until the declaration
    //line const pi = 3.142.

    console.log(name);
    console.log(pi);

    return (
        <div>
            <h1>Hoisting</h1>
        </div>
    )
}

export default Hoisting;
