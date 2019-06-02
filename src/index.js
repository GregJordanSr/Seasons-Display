import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    render () {
         window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        err =>console.log(err)
         );

    return <div><h1>Latitude: {}</h1></div>
    
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));