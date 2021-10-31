import React from 'react';
import SideBar from '../SlideBar/SideBar';

const Review = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10 p-5">
                    <h1> review section</h1>
                </div>
            </div>
        </div>
    );
};

export default Review;