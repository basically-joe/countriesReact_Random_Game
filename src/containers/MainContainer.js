import React, { Component } from 'react';
import FlagDisplay from '../components/FlagDisplay';

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
            <FlagDisplay flags= {this.state.countries}/>
        )
    }
}
 
export default MainContainer;