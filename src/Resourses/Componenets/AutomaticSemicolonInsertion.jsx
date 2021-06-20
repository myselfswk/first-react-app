import React from 'react';

function AutomaticSemicolonInsertion() {

    function arrayFromValue(item) {
        return
        [item];
        //It’s easy to miss the new line between the return keyword and [item] expression.
        //However, this newline makes the JavaScript automatically insert a semicolon between return and [item] expression.

        //Here’s an equivalent code with the semicolon inserted after return:
        // function arrayFromValue(item) {
        //     return;
        //return; inside the function makes it return undefined.
        //     [item];
        //   }
    }

    arrayFromValue(10);
    //So arrayFromValue(10) evaluates to undefined.

    return (
        <div>
            <h1>Automatic Semicolon Insertion</h1>
        </div>
    )
}

export default AutomaticSemicolonInsertion;
