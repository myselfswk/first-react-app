import React, { useState } from 'react';
import './EventHandlingForm.css';

function EventHandlingForm() {

    const [heading, setHeading] = useState("");
    const [submittedText, setSubmittedText] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [mouseOver, setMouseOver] = useState(false);

    function changeHeading(e) {
        setHeading(
            e.target.value
        )
    }

    function changeSubmit() {
        setSubmittedText('Submitted');
        setIsSubmitted(!isSubmitted);
    }

    //mouse over functionality (Hover effect)
    function mouseOverFunc() {
        setMouseOver(!mouseOver);
    }
    function mouseLeaveFunc() {
        setMouseOver(!mouseOver);
    }

    return (
        <div className="App">
            <h1>{
                isSubmitted ?
                    submittedText
                    : `Hello, ${heading}`
            }</h1>
            <input
                onChange={changeHeading}
                type="text"
                placeholder="Enter Something"
                className="css-input"
                value={heading} />
            <button
                className="button"
                onClick={changeSubmit}
            >
                <span>Submitted</span>
            </button>
            <button
                style={
                    {
                        backgroundColor: mouseOver ? 'white' : 'black',
                        padding: '20px',
                        margin: '20px',
                        color: mouseOver ? 'black' : 'white'
                    }
                }
                onMouseOver={mouseOverFunc}
                onMouseLeave={mouseLeaveFunc}
            >Mouse over by js</button>
        </div>
    )
}

export default EventHandlingForm;
