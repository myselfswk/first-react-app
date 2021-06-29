import React, { useState } from 'react';
import './LoginByFormHandling.css';

function StateJSX() {

    const [fullName, setFullName] = useState({
        fname: '',
        lname: ''
    });

    function changeName(e) {
        const input = e.target.name;
        const value = e.target.value;

        // if (input === "fname") {
        //     setFullName((prevValue) => {
        //         return {
        //             fname: value,
        //             lname: prevValue.lname
        //         }
        //     })
        // }
        // else if (input === "lname") {
        //     setFullName((prevValue) => {
        //         return {
        //             fname: prevValue.fname,
        //             lname: value
        //         }
        //     })
        // }

        //same thing as we do above
        setFullName((prev) => {
            return {
                ...prev,
                [input]: value
            }
        })
    }

    function btnClicked(e) {
        e.preventDefault();
    }

    return (
        <div className="App">
            <h1>JSX State Handling: -</h1>
            <h2>Full Name: {fullName.fname} {fullName.lname}</h2>

            <form>
                <input name="fname" type="text" placeholder="Enter First Name" className="css-input" onChange={changeName} /> {/*  value={fullName.fname} */}
                <input name="lname" type="text" placeholder="Enter Last Name" className="css-input" onChange={changeName} /> {/*  value={fullName.lname} */}
                <button className="btn-submit" onClick={btnClicked}>Submit</button>
            </form>
        </div>
    )
}

export default StateJSX;
