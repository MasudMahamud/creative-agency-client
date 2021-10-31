import React from 'react';
import SideBar from '../SlideBar/SideBar';

const ServiceList = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10 p-5">
                    <h1> service section</h1>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;