import React, { useContext } from 'react';
import { Number } from './ContextApp';

//This Component is for ContextApp
function ComponentC() {
    const number = useContext(Number);
    return (
        <div>
            <h1>Increament Number: {number}</h1>
        </div>
    )
}

export default ComponentC;
