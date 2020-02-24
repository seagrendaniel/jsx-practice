// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  return <div>Hi There!</div>
}

// Take the react component and display on screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
