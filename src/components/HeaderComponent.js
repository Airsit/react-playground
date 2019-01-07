// Imports
import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

// Header Component
class Header extends Component {
    // Rendering the view
    render() {
        return(
            <React.Fragment>
   	     		{/* Navbar Section */}
                <Navbar dark>
					<div className="container">
						<NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
					</div>
				</Navbar>

                {/* Jumbotron Section */}
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment >
        );

    }
}

// Exporting the Header Component
export default Header;