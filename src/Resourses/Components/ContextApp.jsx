import React, { createContext, useState } from 'react';
import ComponentA from './ComponentA';

const Number = createContext();
const IncreamentNumber = createContext();
const DecreamentNumber = createContext();

function ContextApp() {

    const [num, setNum] = useState(0);
    function IncreamentNum() {
        setNum(num + 1);
    }

    function DecreamentNum() {
        setNum(
            num - 1
        );
    }

    return (
        <div>
            <Number.Provider value={num}>
                <IncreamentNumber.Provider value={IncreamentNum}>
                    <DecreamentNumber.Provider value={DecreamentNum}>
                        <ComponentA />
                    </DecreamentNumber.Provider>
                </IncreamentNumber.Provider>
            </Number.Provider>
        </div>
    )
}

export default ContextApp;
export {
    Number,
    IncreamentNumber,
    DecreamentNumber
};