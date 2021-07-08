import React from 'react';

const ReapetLetterInString = () => {

    var name = "Waleed";

    //Duplicate Words By Arrow Function
    const DuplicateCharCount = (str) => {
        if (str) {
            var obj = {};
            var len = str.length;

            for (let i = 0; i < len; i++) {
                if (obj[str[i]]) {
                    obj[str[i]] += 1;
                } else {
                    obj[str[i]] = 1;
                }
            }
            console.log("Duplicate Letters: ", obj);
        }
    }

    DuplicateCharCount(name);

    //Duplicate Words By Normal Function
    function duplicateCharCount(str) {
        if (str) {
            var obj = {};
            var len = str.length;

            for (let i = 0; i < len; i++) {
                if (obj[str[i]]) {
                    obj[str[i]] += 1;
                } else {
                    obj[str[i]] = 1;
                }
            }
            console.log("Duplicate Letters: ", obj);
        }

    }

    duplicateCharCount(name);

    return (
        <div>
            <h1>Reapet Letter In String: -</h1>
        </div>
    )
}

export default ReapetLetterInString;
