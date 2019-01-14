// Importing components
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';

// Form Controls for checking if the author name is correct
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const selRating = (val) => (val) !== undefined && (val) !== "Select one option";

// Class Component CommentForm
class CommentForm extends Component {
    constructor(props) {
        super(props);

        // State for Modal functioning
        this.state = {
            isModalCommentOpen: false
        }  

        // Binding for the events
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModalComments = this.toggleModalComments.bind(this);
    }

    // Submit event
    handleSubmit(values) {
        this.toggleModalComments();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    // Modal toggle event
    toggleModalComments() {
        this.setState({
            isModalCommentOpen: !this.state.isModalCommentOpen
        });
    }

    // Rendering the component
    render() {
        return(
            <React.Fragment>
                {/* Submit Comment Button */}
                <Button outline onClick={this.toggleModalComments}>
                    <span className="fa fa-comments-o"></span> Submit Comment
                </Button>

                {/* Modal Section */}
                <Modal isOpen={this.state.isModalCommentOpen} toggle={this.toggleModalComments}>
                    <ModalHeader toggle={this.toggleModalComments}>Submit Comment</ModalHeader>

                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
                            {/* Rating Field */}
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="rating">Rating</Label>
                                    
                                    <Control.select model=".rating" name="rating" className="form-control" validators={{ selRating }}>
                                        <option>Select one option</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>

                                    <Errors className="text-danger" model=".rating" show="touched" messages={{ selRating: 'You must select a rating. '}} />
                                </Col>
                            </Row>
                            
                            {/* Author Field */}
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="author">Author Name</Label>
                                    
                                    <Control.text model=".author" name="author" className="form-control" placeholder="Author Name" validators={{ minLength: minLength(3), maxLength: maxLength(15) }} />
                                    
                                    <Errors className="text-danger" model=".author" show="touched" messages={{ minLength: 'Must be greater than 2 characters', maxLength: 'Must be 15 characters or less' }} />
                                </Col>
                            </Row>

                            {/* Comment Field */}
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="comment">Comment</Label>
                                    
                                    <Control.textarea model=".comment" id="comment" name="comemnt" rows="6" className="form-control" />
                                </Col>
                            </Row>

                            {/* Submit Button */}
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

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
function RenderComments({comments, addComment, dishId}) {
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
                {/* Calling the CommentForm component */}
                <CommentForm dishId={dishId} addComment={addComment} />
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
    if(props.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if(props.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    // If the this is not null, we call the above methods so the rendering
    // is possible and without errors
    else if(props.dish != null) {
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
                    <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id} />
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