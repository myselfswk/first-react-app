import React, { createContext } from 'react';
import CompA from './CompA';

const FirstName = createContext();
const LastName = createContext();

export default function ContextAPI() {


    return (
        <div>
            <FirstName.Provider value={"Waleed"}>
                <LastName.Provider value={"Khan"}>
                    <CompA />
                </LastName.Provider>
            </FirstName.Provider>
        </div>
    )
}

export {
    FirstName,
    LastName
};
