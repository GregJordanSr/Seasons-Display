import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props){
        super(props);  // Super is used when we reference the parents constructor function

        // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO this.state!!!
        // constructor is used to initialize state

        this.state = { lat: null, errorMessage: '' };

        
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // in order to update the state object we called setState.
                this.setState({lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        );
    }
    
    
    // React says we have to define render!!!
    render () {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        } 
        if (!this.state.errorMessage && this.state.lat) {
            return <div><h1>latitude: {this.state.lat}</h1></div>
        } 
        return <div>Loading, please be patient.</div> 
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));