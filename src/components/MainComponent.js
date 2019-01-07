// Importing components
import React, { Component } from 'react';
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
            dishes: DISHES,
            selectedDish: null
		};
	}
    
    // onDishSelect method
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

  	render() {
    	return (
      		<div>
				{/* Header Section */}
				<Header />

                {/* Menu Section */}
				<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />

                {/* Dish Detail */}
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />

				{/* Footer Section */}
				<Footer />
      		</div>
    	);
  	}
}

// Exporting Main Component
export default Main;