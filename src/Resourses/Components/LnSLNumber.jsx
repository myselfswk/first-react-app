import React from 'react';

const LnSLNumber = () => {

    var arr = [1, 101, 20, 300, 400, 500, 600];

    //largest & Second Largest value in array
    const LnSLNumberFunc = (arr) => {
        var largest = arr[0];
        var secLargest;

        for (var s = 0; s < arr.length; s++) {
            if (largest < arr[s]) {
                largest = arr[s];
            }
        }

        for (var t = 0; t < arr.length - 1; t++) {
            if (arr[t] !== largest) {
                if (arr[t] < arr[t + 1]) {
                    secLargest = arr[t];
                }
            }
        }

        console.log("Largest No: ".concat(largest));
        console.log("Largest No: ".concat(secLargest));
    }

    const mulLnSecLNumber = (arr) => {
        var largest = arr[0];
        var secLargest;
        var mulArr;

        for (var s = 0; s < arr.length; s++) {
            if (largest < arr[s]) {
                largest = arr[s];
            }
        }

        for (var t = 0; t < arr.length - 1; t++) {
            if (arr[t] !== largest) {
                if (arr[t] < arr[t + 1]) {
                    secLargest = arr[t];
                }
            }
        }

        mulArr = largest * secLargest;
        console.log(`Multiplication of Two Highest Values of Array: ${mulArr}`);
    }

    LnSLNumberFunc(arr);
    mulLnSecLNumber(arr);

    return (
        <div>
            <h1>Largest & Second Largest Number in Array: -</h1>
        </div>
    )
}

export default LnSLNumber;
