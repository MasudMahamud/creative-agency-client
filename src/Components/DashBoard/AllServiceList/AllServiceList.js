import React from 'react';
import SideBar from '../../SlideBar/SideBar';

const AllServiceList = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10">
                    <p>All services List Here</p>
                </div>
            </div>
        </div>
    );
};

export default AllServiceList;