import React from 'react';
import './NavBar.css';
import logo from '../../../../images/logos/logo.png'
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div className="container">
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"> <img style={{ width: '120px' }} src={logo} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link to="/" className="my-nav" active>Home</Nav.Link>
                            <Nav.Link to="/" className="my-nav">Our Portfolio</Nav.Link>

                            <Nav.Link to="/" className="my-nav">Our Team </Nav.Link>

                            <Nav.Link to="/" className="my-nav">contact us </Nav.Link>

                            <Nav.Link to="/">
                                <span className="primary-btn my-nav" >login</span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;