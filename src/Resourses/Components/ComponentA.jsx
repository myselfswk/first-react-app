import React, { useContext } from 'react';
import ComponentB from './ComponentB';
import { DecreamentNumber } from './ContextApp';

//This Component is for ContextApp
function ComponentA() {

    const DecNum = useContext(DecreamentNumber);

    return (
        <div>
            <ComponentB />
            <button onClick={() => { DecNum() }}>Decreament Number</button>
        </div>
    )
}

export default ComponentA;
