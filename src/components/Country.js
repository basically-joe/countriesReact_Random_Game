import React from 'react';

const Country = (props) => {
    
    const countryName = props.names;
    const randomName = countryName[Math.floor(Math.random()*countryName.length)];

    if (countryName.length === 0) return null;
    return ( 
        <div className = "country-name-display">
        <h2>{randomName.name}</h2>
        </div>
     );
}

export default Country;