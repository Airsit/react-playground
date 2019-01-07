// Importing components
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    // renderDish method
    function RenderDish({dish}) {
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
    function RenderComments({comment}) {
        // Checking if the comments array is null, so I can prevent a possible error
        if(comment != null) {
            // Mapping all the components for printing them on screen
            const commentList = comment.map((elem) => {
                return (
                        <div key={elem.id}>
                            <ul className="list-unstyled">
                                <li>{elem['comment']}<br></br><br></br></li>
                                <li>-- {elem['author']} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(elem['date'])))}</li>
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
    
    const DishDetail = (props) => {
        // If the this is not null, we call the above methods so the rendering
        // is possible and without errors
        if(props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

// Making DishDetail component exportable
export default DishDetail;