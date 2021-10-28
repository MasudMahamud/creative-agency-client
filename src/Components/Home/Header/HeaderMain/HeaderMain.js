import React from 'react';
import frameImage from '../../../../images/logos/Frame.png'
const HeaderMain = () => {
    return (
        <div className="container">
            <div  style={{ marginTop: '50px'}} className="row">
                <div className="col-md-6 ms-3 mt-4">
                    <div className="header-info" style={{ color: '#111430' }}>
                        <h2> Let's Grow Your <br /> Brand To <br /> The Next Level </h2>
                        <p> Lorem ipsum,<br />dolor sit amet consectetur adipisicing elit.<br />
                            Nesciunt dignissimos deserunt ipsum! </p>
                        <button className="primary-btn"> Hire us </button>
                    </div>
                </div>
                <div className="col-md-5 ">
                    <div className="header-image">
                        <img src={frameImage} style={{ width: '100%' }} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;