// Importing components
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// Functional Component RenderMenuItem
function RenderMenuItem({ dish, onClick }) {
    return ( 
        /* Saving the selected dish */
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />

                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {
    // Creating a map that displays all the dishes
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} />
            </div>
        );
    })

    // Rendering all the dishes and the DishDetail component
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem active>
                        Menu
                    </BreadcrumbItem>
                </Breadcrumb>

                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            
            <div className="row">
                {menu}
            </div>
        </div>
    )
}

// Making exportable the Menu Component
export default Menu;