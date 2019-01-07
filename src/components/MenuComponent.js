// Importing components
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderMenuItem({ dish, onClick }) {
    return ( 
        /* Saving the selected dish */
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />

            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

// 
const Menu = (props) => {
    // Creating a map that displays all the dishes
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    })

    // Rendering all the dishes and the DishDetail component
    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    )
}

// Making exportable the Menu Component
export default Menu;