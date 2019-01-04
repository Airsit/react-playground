// Importing components
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

// Menu component
class Menu extends Component {
    // Constructor of Menu class
    constructor(props) {
        super(props);

        // Variable that contains the selected dish
        this.state = {
            selectedDish: null
        }
    }

    // onDishSelect method
    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }
    
    // Rendering the Menu Component
    render() {
        // Creating a map that displays all the dishes
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/* Saving the selected dish */}
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />

                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })

        // Rendering all the dishes and the DishDetail component
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>

                <DishDetail dish={this.state.selectedDish}/>
            </div>
        );
    }
}

// Making exportable the Menu Component
export default Menu;