import React from 'react';
import SideBar from '../SlideBar/SideBar';

const handleBlur = data => console.log(data);

const handleSubmit = data => console.log(data);

const Review = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10">
                    <h4 className="pt-3 ms-2" style={{ color: '#888' }}>Review</h4> <hr />
                    <form onSubmit={handleSubmit}>
                        <div class="form-group mb-3">
                            <input onBlur={handleBlur} className="form-control" type="text" class="form-control" name="name" placeholder="Your name " />
                        </div>
                        <div class="form-group mb-3">
                            <input onBlur={handleBlur} className="form-control" type="text" class="form-control" name="name" placeholder="company's name/ Designation" />
                        </div>
                        <div className="form-group mb-3">
                            <textarea onBlur={handleBlur} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description" />
                        </div>
                        <div className="submit-btn" style={{ width: '60px' }}>
                            <button type="submit" class="btn btn-dark">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;