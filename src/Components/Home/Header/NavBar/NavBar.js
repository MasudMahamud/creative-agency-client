import React from 'react';
import './NavBar.css';
import logo from '../../../../images/logos/logo.png'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="container my-nav">
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
                            <Link to="/home" active>Home</Link>
                            <Link to="/portfolio" >Our Portfolio</Link>

                            <Link to="/team" >Our Team </Link>

                            <Link to="/" id="contract" >contact us </Link>

                            <Link to="/login">
                                <span className="primary-btn my-nav" >login</span>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;