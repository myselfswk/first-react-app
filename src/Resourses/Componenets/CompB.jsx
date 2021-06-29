import React, { useContext } from 'react';
import CompC from './CompC';
import { FirstName, LastName } from './ContextAPI';

function CompB() {

    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    const message = `Full Name With useContext(): ${fname} ${lname}`;

    return (
        <div>
            <h1>{message}</h1>
            <CompC />
        </div>
    )
}

export default CompB;
