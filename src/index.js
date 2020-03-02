// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// import faker from 'faker';
// import Comment from './Components/Comment';
// import ApprovalCard from './Components/ApprovalCard';
// import SeasonsApp from './Components/SeasonsApp';


// Create a react component
class App extends React.Component {
  constructor(props) {
    super(props);       // ensures that the constructor function inside React.Component still gets called
    this.state = {
      lat: null,
      errorMessage: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }


  render() {
    if (this.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div>Loading!</div>
  }
}

// Take the react component and display on screen
ReactDOM.render(<App />, document.querySelector('#root'));
