// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './Components/Comment';


// Create a react component
const App = () => {

  return (
    <div className="ui container comments">
      <Comment 
      author="Sam" 
      timeAgo="Today at 4:55PM"
      content="great post!"
      />
      <Comment 
      author="Alex" 
      timeAgo="Today at 12:00PM"
      content="Not too impressed.."
      />
      <Comment 
      author="Joe" 
      timeAgo="Yesterday at 11:30AM"
      content="Whoa!"
      />
    </div>
   )
}
    
    // Take the react component and display on screen
ReactDOM.render(<App />, document.querySelector('#root')
);