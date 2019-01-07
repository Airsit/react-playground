import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';

// App Component
class App extends Component {

  render() {
    return (
      <div className="App">
	  	{/* Main Component */}
        <Main />
      </div>
    );
  }
}

// Exporting App
export default App;