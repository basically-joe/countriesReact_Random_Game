import React, { Component } from 'react';

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
        return ( <h1>I'm the main container!</h1> );
    }
}
 
export default MainContainer;