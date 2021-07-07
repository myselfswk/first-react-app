import React from 'react';

function Array() {

    var arr = [18, 27, 35, 42, 53];

    for (var i = 0; i < 5; i++) {
        console.log(`Value No ${i + 1} is ${arr[i]}`);
    }

    var j = 0;
    while (j < 5) {
        console.log(`Value No ${j + 1} is ${arr[j]} By While Loop`);
        j++;
    }

    var k = 0;
    do {
        console.log(`Value No ${k + 1} is ${arr[k]} By Do While Loop`);
        k++;
    } while (k < 5);

    var person = {
        name: 'Waleed Khan',
        age: 22,
        JobTitle: "Frontend Developer"
    }

    //Loop in
    for (var w in person) {
        console.log(person[w]);
    }

    return (
        <div>
            <h1>Array:</h1>
        </div>
    )
}

export default Array;
