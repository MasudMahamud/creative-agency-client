import React, { useState, useContext, useEffect } from 'react';
import './SideBar.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { UserContext } from './../../App';

const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);


    useEffect(() => {
        fetch('http://localhost:4000/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => setIsAdmin(data))
    }, [])

    return (
        <div className="sidebar">
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="navbar-light d-flex flex-column bd-highlight mb-2"
                            style={{ maxHeight: '300px', }}
                        >
                            <Link className="p-2 bd-highlight" to="/home"> <img style={{ width: '95px' }} src={logo} alt="" /> </Link>
                            <Link className="p-2 mt-2 bd-highlight" to="/home"> <HomeIcon />  Home </Link>
                            <Link className="p-2 bd-highlight" to="/order"><AddShoppingCartIcon /> Order </Link>
                            <Link className="p-2 bd-highlight" to="/list"><LowPriorityIcon /> Service</Link>
                            <Link className="p-2 bd-highlight" to="/review"><ReviewsIcon /> Review  </Link>
                            {
                                isAdmin && <div className="mb-5 bd-highlight" style={{ display: 'inline-grid' }}>
                                    <Link className="ps-2" to="/allServiceList"><AddShoppingCartIcon />Service list </Link>
                                    <Link className="ps-2" to="/addService"><LowPriorityIcon />Add service</Link>
                                    <Link className="ps-2" to="/makeAdmin" ><ReviewsIcon />Add admin</Link></div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default SideBar;
