import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

// App Component
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
        {/* Main Component */}
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

// Exporting App
export default App;