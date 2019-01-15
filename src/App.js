// Imports && Components
import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

// App Component
class App extends Component {

  	render() {
    	return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						{/* Main Component */}
						<Main />
					</div>
				</BrowserRouter>
			</Provider>
    	);
  	}
}

// Exporting App
export default App;