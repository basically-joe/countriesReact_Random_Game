import React, { Component } from 'react';
import FlagDisplay from '../components/FlagDisplay';
import CountrySelector from '../components/CountrySelector';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            countries: []
         }
    }

componentDidMount(){
    const url = "https://restcountries.eu/rest/v2/all"
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({countries: data}))
}


    render() { 
        return(
            <div className="main-display">
            <FlagDisplay flags= {this.state.countries}/>
            <CountrySelector names= {this.state.countries}/>
            </div>
        )
    }
}
 
export default MainContainer;