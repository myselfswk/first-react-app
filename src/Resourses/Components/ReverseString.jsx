import React from 'react';

const ReverseString = () => {

    var name = 'huzaifa';
    let rev = '';
    let len = name.length;

    for (var i = len - 1; i >= 0; i--) {
        rev += name[i];
    }

    console.log(rev);

    return (
        <div>
            <h1>Reverse String</h1>
        </div>
    )
}

export default ReverseString;
