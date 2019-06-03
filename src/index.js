import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props){
        super(props);  // Super is used when we reference the parents constructor function

        // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO this.state!!!
        // constructor is used to initialize state

        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // in order to update the state object we called setState.
                this.setState({lat: position.coords.latitude });
            },
            err =>console.log(err)
        );

    }
    
   
   
    // React says we have to define render!!!
    render () {
        

    return <div><h1>Latitude: {this.state.lat}</h1></div>
    
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));