import React from 'react';

const Palindrome = () => {

    const PalindromeFunc = (str) => {
        var lowerStr = str.toLowerCase();
        var revStr = lowerStr.split('').reverse().join('');

        if (lowerStr === revStr) {
            console.log("Palindrome");
        }
        else {
            console.log("Not Palindrome");
        }
    }

    PalindromeFunc("String");

    return (
        <div>
            <h1>Palindrome function</h1>
        </div>
    )
}

export default Palindrome
