// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './Components/Comment';
import ApprovalCard from './Components/ApprovalCard';
import SeasonsApp from './Components/SeasonsApp';


// Create a react component
class App extends React.Component {
  
  render(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return <div>Latitude: </div>
  }
}

// Take the react component and display on screen
ReactDOM.render(<App />, document.querySelector('#root'));
