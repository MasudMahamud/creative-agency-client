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
                    <Link to="/home"> <img style={{ width: '120px' }} src={logo} alt="" /> </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                        >
                            <Link to="/home" active>Home</Link>
                            <Link to="/portfolio" >Our Portfolio</Link>
                            <Link to="/team" >Our Team </Link>
                            <Link to="/">contact us </Link>                         

                            <Link to="/order" className="primary-btn my-nav">
                                <span> order</span>
                            </Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;