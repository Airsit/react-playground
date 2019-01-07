// Importing components
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';

// Main Component
class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
            dishes: DISHES
		};
	}

  	render() {
		const HomePage = () => {
			return(
				<Home />
			);
		}

    	return (
      		<div>
				{/* Header Section */}
				<Header />

				<Switch>
					<Route path="/home" component={HomePage} />
					<Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
					<Redirect to="/home" />
				</Switch>

				{/* Footer Section */}
				<Footer />
      		</div>
    	);
  	}
}

// Exporting Main Component
export default Main;