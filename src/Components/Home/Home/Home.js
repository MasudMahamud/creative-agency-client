import React from 'react';
import './Home.css';
import Header from '../Header/Header/Header';
import Sponsor from '../Sponsor/Sponsor';
import Service from '../Service/Service';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Sponsor></Sponsor>
            <Service></Service>
        </>

    );
};

export default Home;