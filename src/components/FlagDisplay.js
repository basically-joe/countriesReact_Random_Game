import React from 'react';
import SelectedCountry from "./SelectedCountry"

const FlagDisplay = (props) => {
    
    const flagData = props.flags;
    const randomFlag = flagData[Math.floor(Math.random()*flagData.length)];
    const randomAns1 = flagData[Math.floor(Math.random()*flagData.length)];
    const randomAns2 = flagData[Math.floor(Math.random()*flagData.length)];
    const randomAns3 = flagData[Math.floor(Math.random()*flagData.length)];

    if (flagData.length === 0) return null;
    return ( 
        <div className = "flag-display">
        <img src={randomFlag.flag} alt="country-name"></img>
        <div className="answer-ptags">
        <ul>
        <li><a>{randomFlag.name}</a></li>
        <li><a>{randomAns1.name}</a></li>
        <li><a>{randomAns2.name}</a></li>
        <li><a>{randomAns3.name}</a></li>
        </ul>
        </div>

        {/* <SelectedCountry answerName = {randomFlag.name}/> */}
        </div>
     );
}
 
export default FlagDisplay;
 