// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './Components/Comment';
import ApprovalCard from './Components/ApprovalCard';


// Create a react component
const App = () => {

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Comment
          author="Sam"
          timeAgo="Today at 4:55PM"
          content="great post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <Comment
        author="Alex"
        timeAgo="Today at 12:00PM"
        content="Not too impressed.."
        avatar={faker.image.avatar()}
      />
      <Comment
        author="Joe"
        timeAgo="Yesterday at 11:30AM"
        content="Whoa!"
        avatar={faker.image.avatar()}
      />
    </div>
  )
}

// Take the react component and display on screen
ReactDOM.render(<App />, document.querySelector('#root')
);
