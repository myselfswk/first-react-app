import React from 'react';
import PropsInReact from './PropsInReact';
import Contact from './Contact';

function Cards() {

    function insertCard(contact) {
        return (
            <PropsInReact
                key={contact.id}
                name={contact.name}
                altername={contact.altername}
                source={contact.source}
                email={contact.email}
            />
        );
    }

    return (
        <div>
            {
                Contact.map(insertCard)
            }
            {/* <PropsInReact
                name={Contact[0].name}
                altername={Contact[0].altername}
                source={Contact[0].source}
                email={Contact[0].email}
            />
            <hr />
            <PropsInReact
                name={Contact[1].name}
                altername={Contact[1].altername}
                source={Contact[1].source}
                email={Contact[1].email}
            /> */}
        </div>
    )
}

export default Cards;
