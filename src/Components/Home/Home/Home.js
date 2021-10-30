import React from 'react';
import './Home.css';
import Header from '../Header/Header/Header';
import Sponsor from '../Sponsor/Sponsor';
import Service from '../Service/Service';
import WorkCarousel from '../WorkCarousel/WorkCarousel';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Sponsor></Sponsor>
            <Service></Service>
            <WorkCarousel></WorkCarousel>
        </>

    );
};

export default Home;