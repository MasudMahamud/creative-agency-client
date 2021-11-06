import React from 'react';
import './Header.css';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from './../../Shared/NavBar/NavBar';


const Header = () => {
    return (
        <div className="header-container">
            <NavBar></NavBar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;