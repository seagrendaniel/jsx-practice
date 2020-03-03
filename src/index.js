// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './Components/SeasonsDisplay'
import LoadingSpinner from './Components/LoadingSpinner'

// import faker from 'faker';
// import Comment from './Components/Comment';
// import ApprovalCard from './Components/ApprovalCard';
// import SeasonsApp from './Components/SeasonsApp';


// Create a react component
class App extends React.Component {

  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log('my component updated');
  }

  renderContent() {
    if (this.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <LoadingSpinner message="Please accept location request" />
  }


  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

// Take the react component and display on screen
ReactDOM.render(<App />, document.querySelector('#root'));
