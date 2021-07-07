import React from 'react';

const SnLNumbersInArray = () => {

    var arr = [1, -1, 10, 20, 30, 100];

    //largest value in array
    const largestNumber = (arr) => {
        var largest = arr[0];

        for (var s = 0; s < arr.length; s++) {
            if (largest < arr[s]) {
                largest = arr[s];
            }
        }

        console.log("Largest No: ".concat(largest));
    }

    largestNumber(arr);

    //Smallest Number in array
    const smallestNumber = (arr) => {
        var smallest = arr[0];

        for (var t = 0; t < arr.length; t++) {
            if (smallest > arr[t]) {
                smallest = arr[t];
            }
        }

        console.log("Smallest No: ".concat(smallest));
    }

    smallestNumber(arr);

    return (
        <div>
            <h1>Smallest & largest Number in Array</h1>
        </div>
    )
}

export default SnLNumbersInArray;
