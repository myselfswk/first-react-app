import React from 'react';
import { FirstName, LastName } from './ContextAPI';

function CompC() {

    return (
        <div>
            <FirstName.Consumer>
                {
                    (fname) => {
                        return (
                            <LastName.Consumer>
                                {
                                    (lname) => {
                                        return (
                                            <h1>Full Name Without useContext(): {fname} {lname}</h1>
                                        )
                                    }
                                }
                            </LastName.Consumer>
                        )
                    }
                }
            </FirstName.Consumer>
        </div>
    )
}

export default CompC;
