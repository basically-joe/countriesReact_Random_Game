import React from 'react';
import Country from "./Country"
import SelectedCountry from "./SelectedCountry"


const CountrySelector = (props) => {
    
    return ( 
        <div className="lower-answers">
        <Country names = {props.names}/>
        <Country names = {props.names}/>
        <Country names = {props.names}/>
                

        <SelectedCountry names = {props.answerName}/>
        </div>
     );
}

export default CountrySelector;