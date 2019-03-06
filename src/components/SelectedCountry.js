import React from 'react';
import FlagDisplay from "../components/FlagDisplay"

const SelectedCountry = (props) => {

    return(
        <div className = "answer-name-display">
        <h2>{props.answerName}</h2>
        </div>
    )
}

export default SelectedCountry;