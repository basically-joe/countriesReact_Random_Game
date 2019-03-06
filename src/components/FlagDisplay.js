import React from 'react';
import SelectedCountry from "./SelectedCountry"

const FlagDisplay = (props) => {
    
    const flagData = props.flags;
    const randomFlag = flagData[Math.floor(Math.random()*flagData.length)];
    const randomAns1 = flagData[Math.floor(Math.random()*flagData.length)];
    const randomAns2 = flagData[Math.floor(Math.random()*flagData.length)];
    const randomAns3 = flagData[Math.floor(Math.random()*flagData.length)];


   function handleClick(event){
        props.onClick(event.target.value)
    }

    if (flagData.length === 0) return null;
    return ( 
        <div className = "flag-display">
        <img src={randomFlag.flag} alt="country-name"></img>
        <div className="answer-ptags">
        <ul>
        <li><a value = {randomFlag.name}>{randomFlag.name} onClick = {handleClick}</a></li>
        <li><a value = {randomAns1.name}>{randomAns1.name}</a></li>
        <li><a value = {randomAns2.name}>{randomAns2.name}</a></li>
        <li><a value = {randomAns3.name}>{randomAns3.name}</a></li>
        </ul>
        </div>

        {/* <SelectedCountry answerName = {randomFlag.name}/> */}
        </div>
     );
}
 
export default FlagDisplay;
 