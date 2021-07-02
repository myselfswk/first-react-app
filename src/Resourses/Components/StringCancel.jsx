import React, { useState } from 'react';
import './StringCancel.css';

function StringCancel() {

    //if you don't want to use css and state
    const StyleHeading = {
        textDecoration: "line-through",
        backgroundColor: "blue"
    }

    const [changeString, setChangeString] = useState(false);
    const [changeStringByConst, setChangeStringByConst] = useState(false);

    return (
        <div className="App">
            <h1 className={`${changeString ? 'string-H' : null}`}>String Crossed by CSS and State</h1>
            <button className="btn-inc" onClick={() => setChangeString(!changeString)}>Change the String</button>

            <h1 style={
                changeStringByConst ?
                    StyleHeading
                    : null
            }>String Crossed by Const Value and State</h1>
            <button className="btn-inc" onClick={() => setChangeStringByConst(!changeStringByConst)}>Change the String</button>
        </div>
    )
}

export default StringCancel;
