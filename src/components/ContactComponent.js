// Imports
import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

// Functional Contacts Component
class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: "Tel.",
            message: "",
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        });

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;
        
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        console.log("Current State is: " + JSON.stringify(this.state));
        alert("Current State is: " + JSON.stringify(this.state));
        e.preventDefault();
    }

    handleBlur = (field) => (e) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: ""            
        };

        // Checking if the first name is too short or too long
        if(this.state.touched.firstname && firstname.length < 3) {
            errors.firstname = 'First Name should be >= 3 characters.';
        }
        else if(this.state.touched.firstname && firstname.length > 10) {
            errors.firstname = 'First Name should be <= 10 characters.';
        }

        // Checking if the last name is too short or too long
        if(this.state.touched.lastname && lastname.length < 3) {
            errors.lastname = 'Last Name should be >= 3 characters.';
        }
        else if(this.state.touched.lastname && lastname.length > 10) {
            errors.lastname = 'Last Name should be <= 10 characters.';
        }

        // Checking if the number has characters.
        const reg = /^\d+$/;
        if(this.state.touched.telnum && !reg.test(telnum)) {
            errors.telnum = "Tel. Number should contain only numbers.";
        }

        // Checking if the email is valid
        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1) {
            errors.email = "Email should contain a @.";
        }

        return errors;
    }

    render() {
        // Checking for errors
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

        // Returns the Contact's View
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem active>
                            Contact Us
                        </BreadcrumbItem>
                    </Breadcrumb>

                    <div className="col-12">
                        <h3>Conctact Us</h3>
                        <hr />
                    </div>
                </div>

                <div className="row row-content">
                    {/* Location Information Section */}
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>

                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>

                            <address>
                                121, Clear Water Bay Road<br />
                                Clear Water Bay, Kowloon<br />
                                HONG KONG<br />
                                <i className="fa fa-phone"></i>: +852 1234 5678<br />
                                <i className="fa fa-fax"></i>: +852 8765 4321<br />
                                <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>

                    {/* Map Section */}
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>

                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            {/* eslint-disable-next-line */}
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                    </div>

                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            {/* First Name */}
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>

                                <Col md={10}>
                                    <Input 
                                        type="text" 
                                        id="firstname" 
                                        name="firstname" 
                                        placeholder="First Name" 
                                        value={this.state.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onChange={this.handleInputChange} 
                                        onBlur={this.handleBlur('firstname')} 
                                    />

                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>

                            {/* Last Name */}
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>

                                <Col md={10}>
                                    <Input 
                                        type="text" 
                                        id="lastname" 
                                        name="lastname" 
                                        placeholder="Last Name" 
                                        value={this.state.lastname} 
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onChange={this.handleInputChange} 
                                        onBlur={this.handleBlur('lastname')} 
                                    />

                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            
                            {/* Telephone Number */}
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>

                                <Col md={10}>
                                    <Input 
                                        type="tel" 
                                        id="telnum" name="telnum" 
                                        placeholder="Tel. Number" 
                                        value={this.state.telnum} 
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onChange={this.handleInputChange} 
                                        onBlur={this.handleBlur('telnum')} 
                                    />
                                    
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            
                            {/* Email Address */}
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>

                                <Col md={10}>
                                    <Input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        placeholder="Email" 
                                        value={this.state.email} 
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onChange={this.handleInputChange} 
                                        onBlur={this.handleBlur('email')} 
                                    />
                                    
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>

                            {/* Checkboxes */}
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange} />{' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>

                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            {/* Feedback */}
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>

                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" rows="12" value={this.state.message} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            
                            {/* Submit */}
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

// Exporting Contact
export default Contact;