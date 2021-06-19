import React from 'react';

function PropsInReact(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <img alt={props.altername} src={props.source} />
            <p>{props.email}</p>
        </div>
    )
}

export default PropsInReact;
