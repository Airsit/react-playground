// Importing components
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    // Constructor of DishDetail class
    constructor(props) {
        super(props);
    }

    // renderDish method
    renderDish(dish) {
        // Checking if the dish is null, so we catch the possible error 
        // returning an empty div
        if(dish != null) {
            return (
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    // renderComments method
    renderComments(comment) {
        // Checking if the comments array is null, so I can prevent a possible error
        if(comment != null) {
            // Mapping all the components for printing them on screen
            const commentList = comment.map((elem) => {
                return (
                        <div key={elem.id}>
                            <ul className="list-unstyled">
                                <li>{elem['comment']}<br></br><br></br></li>
                                <li>-- {elem['author']} {elem['date']}</li>
                            </ul>
                        </div>   
                    
                );
            });

            // Rendering the comments
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {commentList}
                </div>
            );
        }
        else {
            return (
                <div></div>
            );    
        }
    }
        
    // Rendering the DishDetail component
    render() {
        // If the this is not null, we call the above methods so the rendering
        // is possible and without errors
        if(this.props.dish != null) {
            return (
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

// Making DishDetail component exportable
export default DishDetail;