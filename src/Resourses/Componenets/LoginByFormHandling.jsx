import React, { useState } from 'react';
import './LoginByFormHandling.css';

function LoginByFormHandling() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [fullName, setFullName] = useState('');

    function changeFName(e) {
        const value = e.target.value;
        setFirstname(
            value
        );
    }

    function changeLName(e) {
        const value = e.target.value;
        setLastname(
            value
        );
    }

    function btnClicked(e) {
        e.preventDefault();
        setFullName(
            firstname.concat(" ", lastname)
        )
    }

    return (
        <div className="App">
            <h1>First Name: {firstname}</h1>
            <h1>Last Name: {lastname}</h1>
            <h1>Full Name: {fullName}</h1>
            <form>
                <input type="text" placeholder="Enter First Name" className="css-input" value={firstname} onChange={changeFName} />
                <input type="text" placeholder="Enter Last Name" className="css-input" value={lastname} onChange={changeLName} />
                <button className="btn-submit" onClick={btnClicked}>Submit</button>
            </form>
        </div>
    )
}

export default LoginByFormHandling;
