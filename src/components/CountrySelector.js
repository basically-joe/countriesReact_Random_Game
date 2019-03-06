import React from 'react';
import Country from "./Country"


const CountrySelector = (props) => {
    
    return ( 
        <div>
        <Country names = {props.names}/>
        <Country names = {props.names}/>
        <Country names = {props.names}/>
        </div>
     );
}

export default CountrySelector;