import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

function Contacts() {
    const { fname, lname } = useParams();
    const location = useLocation();
    const history = useHistory();

    console.log(history);
    return (
        <div>
            <h1>This is Contact Page by {fname} {lname}</h1>
            <h1>The Location is {location.pathname}</h1>
            <button onClick={() => history.goBack()}>Go Back</button>
            <button onClick={() => history.push("/services")}>Go To Services</button>

            {
                location.pathname === "/contact/Waleed/khan" ?
                    (
                        <button>Welcome {fname} {lname}</button>
                    )
                    : null
            }
        </div>
    )
}

export default Contacts;
