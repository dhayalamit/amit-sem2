import React, { useState } from 'react'

const StateandEvents = () => {
    const [text, setText] = useState("")

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <div>Enter Text Here </div>
            <textarea value={text} onChange={handleChange}></textarea>
        </div>
    );
};

export default StateandEvents;