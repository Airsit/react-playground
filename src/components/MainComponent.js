// Importing components
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';

// JS Objects Imports
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

// Main Component
class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dishes: DISHES,
			comments: COMMENTS,
			promotions: PROMOTIONS,
			leaders: LEADERS
		};
	}

  	render() {
		// Renders the homepage's featured elements
		const HomePage = () => {
			return(
				<Home  
					dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
					promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
					leader={this.state.leaders.filter((leader) => leader.featured)[0]}
				/>
			);
		}
		
		// Renders a dish with its comments
		const DishWithId = ({match}) => {
			return(
				<DishDetail 
					dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
					comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
				/>
			);
		}

    	return (
      		<div>
				{/* Header Section */}
				<Header />
				
				{/* React Router Section */}
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
					<Route path="/menu/:dishId" component={DishWithId} />
					<Route exact path="/contactus" component={Contact} />
					<Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
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