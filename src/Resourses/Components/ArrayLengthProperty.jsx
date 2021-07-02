import React from 'react';

function ArrayLengthProperty() {

    const name = ['waleed', 'huzaifa', 'Abu Bakar'];
    name.length = 0;

    console.log(name[0]);
    //Reducing the value of the length property has the side-effect of deleting own array elements whose array index is between the old and new length values.
    //As result when JavaScript executes name.length = 0, all clothes items are deleted

    return (
        <div>
            <h1>Array Length Property</h1>
        </div>
    )
}

export default ArrayLengthProperty;
