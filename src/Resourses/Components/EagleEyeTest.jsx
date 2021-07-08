import React from 'react';

function EagleEyeTest() {

    const length = 4;
    const numbers = [];
    for (var i = 0; i < length; i++); {
        numbers.push(i + 1);
    }

    numbers;  //answer is [5]

    //Equivalent to this code

    const length2 = 4;
    const numbers2 = [];
    var j;
    for (j = 0; j < length2; j++) {
        // does nothing
    } //here j = 4

    {
        // a simple block that pushes 5 to numbers
        numbers2.push(j + 1);
    }

    numbers2;  //answer is [5]

    return (
        <div>
            <h1>Eagle Eye Test: -</h1>
        </div>
    )
}

export default EagleEyeTest;
