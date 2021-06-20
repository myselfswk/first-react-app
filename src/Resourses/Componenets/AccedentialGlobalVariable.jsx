import React from 'react';

function AccedentialGlobalVariable() {

    function AccedentialGlobalVariableFunc() {
        // let a = b = 0;
        //here we create b as global variable (because, its treated as window.b)
        //so, this thing is same as below, like
        let a;
        window.b = 0;
        a = window.b;
        a++;
        return a;
    }

    console.log("Function: ", AccedentialGlobalVariableFunc);
    console.log(typeof (a));
    console.log(typeof (b));

    return (
        <div>
            <h1>Accedential Global Variable</h1>
        </div>
    )
}

export default AccedentialGlobalVariable;
