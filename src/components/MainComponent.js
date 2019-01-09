// Importing components
import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		leaders: state.leaders,
		promotions: state.promotions
	}
}

// Main Component
class Main extends Component {
	constructor(props) {
		super(props);
	}

  	render() {
		// Renders the homepage's featured elements
		const HomePage = () => {
			return(
				<Home  
					dish={this.props.dishes.filter((dish) => dish.featured)[0]} 
					promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
					leader={this.props.leaders.filter((leader) => leader.featured)[0]}
				/>
			);
		}
		
		// Renders a dish with its comments
		const DishWithId = ({match}) => {
			return(
				<DishDetail 
					dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
					comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
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
					<Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
					<Route path="/menu/:dishId" component={DishWithId} />
					<Route exact path="/contactus" component={Contact} />
					<Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
					<Redirect to="/home" />
				</Switch>

				{/* Footer Section */}
				<Footer />
      		</div>
    	);
  	}
}

// Exporting Main Component
export default withRouter(connect(mapStateToProps)(Main));