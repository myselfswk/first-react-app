import React from 'react';

function TrickyClosure() {

    let i;
    for (i = 0; i < 3; i++) {
        const log = () => {
            console.log(i);
        }
        setTimeout(log, 100);
    }

    //Phase no 1: -
    // for() iterating 3 times. During each iteration a new function log() is created, which captures the variable i. Then setTimout() schedules an execution of log().
    // When for() cycle completes, i variable has value 3.
    // log() is a closure that captures the variable i, which is defined in the outside scope of for() cycle. It’s important to understand that the closure captures
    // i variable lexically.

    //Phase no 2: -
    //The second phase happens after 100ms:
    //The 3 scheduled log() callbacks are called by setTimeout(). log() reads the current value of variable i, which is 3, and logs to console 3.
    //That’s why the output to the console is 3, 3 and 3.

    return (
        <div>
            <h1>Tricky Closure: -</h1>
        </div>
    )
}

export default TrickyClosure;
