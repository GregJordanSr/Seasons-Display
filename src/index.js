import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './Components/SeasonDisplay';


class App extends React.Component {
     // Super is used when we reference the parents constructor function

        // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO this.state!!!
        // constructor is used to initialize state

    state = { lat: null, errorMessage: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            
            // in order to update the state object we called setState.
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }
    
    
    // React says we have to define render!!!
    render () {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        } 
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        } 
        return <div>Loading, please be patient.</div> 
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));