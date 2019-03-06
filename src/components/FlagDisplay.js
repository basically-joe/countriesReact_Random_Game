import React from 'react';

const FlagDisplay = (props) => {
    
    const flagData = props.flags;
    if (flagData.length === 0) return null;
    return ( 

        <img src={flagData[0].flag} alt="country-name"></img>
        // console.log(flagData[0].name),
        //  null
     );
}
 
export default FlagDisplay;
 