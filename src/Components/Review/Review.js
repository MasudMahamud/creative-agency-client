import React from 'react';
import SideBar from '../SlideBar/SideBar';

const Review = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10">
                    <h4 className="pt-3 ms-2" style={{ color: '#888' }}>Review</h4> <hr />
                </div>
            </div>
        </div>
    );
};

export default Review;