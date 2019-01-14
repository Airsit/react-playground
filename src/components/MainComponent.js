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
import { addComment, fetchDishes } from '../redux/ActionCreators';

const mapStateToProps = state => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		leaders: state.leaders,
		promotions: state.promotions
	}
}

const mapDispatchToProps = dispatch => ({ 
	addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
	fetchDishes: () => {dispatch(fetchDishes())} 
  });

// Main Component
class Main extends Component {
	componentDidMount() {
		this.props.fetchDishes();
	}

  	render() {
		// Renders the homepage's featured elements
		const HomePage = () => {
			return(
				<Home  
					dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} 
					dishesLoading={this.props.dishes.isLoading}
					dishesErrMess={this.props.dishes.errMess}
					promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
					leader={this.props.leaders.filter((leader) => leader.featured)[0]}
				/>
			);
		}
		
		// Renders a dish with its comments
		const DishWithId = ({match}) => {
			return(
				<DishDetail 
					dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
					isLoading={this.props.dishes.isLoading}
					errMess={this.props.dishes.errMess}
					comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
					addComment={this.props.addComment}
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));