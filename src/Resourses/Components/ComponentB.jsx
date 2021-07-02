import React, { useContext } from 'react';
import ComponentC from './ComponentC';
import { IncreamentNumber } from './ContextApp';

//This Component is for ContextApp
function ComponentB() {

    const IncNum = useContext(IncreamentNumber);

    return (
        <div>
            <ComponentC />
            <button onClick={() => { IncNum() }}>Increament Number</button>
        </div>
    )
}

export default ComponentB;
