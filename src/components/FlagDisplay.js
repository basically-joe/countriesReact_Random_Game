import React from 'react';

const FlagDisplay = (props) => {
    
    const flagData = props.flags;
    const randomFlag = flagData[Math.floor(Math.random()*flagData.length)];

    if (flagData.length === 0) return null;
    return ( 
        <div className = "flag-display">
        <img src={randomFlag.flag} alt="country-name"></img>
        </div>
     );
}
 
export default FlagDisplay;
 