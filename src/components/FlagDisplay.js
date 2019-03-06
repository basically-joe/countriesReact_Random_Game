import React from 'react';
import SelectedCountry from "./SelectedCountry"

const FlagDisplay = (props) => {
    
    const flagData = props.flags;
    const randomFlag = flagData[Math.floor(Math.random()*flagData.length)];


    if (flagData.length === 0) return null;
    return ( 
        <div className = "flag-display">
        <img src={randomFlag.flag} alt="country-name"></img>
        <SelectedCountry answerName = {randomFlag.name}/>
        </div>
     );
}
 
export default FlagDisplay;
 