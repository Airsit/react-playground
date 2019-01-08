// Importing components
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    // renderDish method
    function RenderDish({dish}) {
        // Checking if the dish is null, so we catch the possible error 
        // returning an empty div
        if(dish != null) {
            console.log("dish");
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
    function RenderComments({comments}) {
        // Checking if the comments array is null, so I can prevent a possible error
        if(comments != null) {
            // Rendering the comments
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>

                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            );
                        
                        })}
                    </ul>
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
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/home">Home</Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <Link to="/menu">Menu</Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem active>
                                {props.dish.name}
                            </BreadcrumbItem>
                        </Breadcrumb>

                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>

                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} />
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