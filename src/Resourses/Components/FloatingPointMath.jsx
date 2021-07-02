import React from 'react';

function FloatingPointMath() {

    //First, let’s look at the value of 0.1 + 0.2:
    //0.1 + 0.2; // => 0.30000000000000004

    console.log("0.1 + 0.2: ", 0.1 + 0.2);
    //The sum of 0.1 and 0.2 numbers is not exactly 0.3, but slightly above 0.3.

    //Due to how floating point numbers are encoded in binary, operations like addition of floating point numbers are subject to rounding errors.
    //Simply put, comparing floats directly is not precise.
    console.log(0.1 + 0.2 === 0.3); //return false

    return (
        <div>
            <h1>Floating Point Math: -</h1>
        </div>
    )
}

export default FloatingPointMath;
