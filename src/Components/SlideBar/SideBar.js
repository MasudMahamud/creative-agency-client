import React from 'react';
import './SideBar.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import ReviewsIcon from '@mui/icons-material/Reviews';

const SideBar = () => {
    return (
        <div className="my-nav">
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="d-flex flex-column bd-highlight mb-3"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Navbar.Brand href="#"> <img style={{ width: '100px' }} src={logo} alt="" /> </Navbar.Brand>
                            <Link className="p-2 mt-5 bd-highlight" to="/home"> <HomeIcon/>  Home </Link>
                            <Link className="p-2 bd-highlight" to="/order"><AddShoppingCartIcon/> Order </Link>
                            <Link className="p-2 bd-highlight" to="/list" ><LowPriorityIcon/> Service</Link>
                            <Link className="p-2 bd-highlight" to="/review"><ReviewsIcon/> Review  </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default SideBar;
