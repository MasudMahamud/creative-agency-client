import React, { useState } from 'react';
import SideBar from '../SlideBar/SideBar';

const Review = () => {
    const [review, setReview] = useState({});

    const handleBlur = e => {
        const newInfo = { ...review };
        newInfo[e.target.name] = e.target.value;
        setReview(newInfo);

    }

    const handleSubmit = e => {
        const formData = new FormData()
        formData.append('name', review.name);
        formData.append('designation', review.designation);
        formData.append('description', review.description);

        fetch('http://localhost:4000/addReview', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }
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
                            <input onBlur={handleBlur} className="form-control" type="text" class="form-control" name="designation" placeholder="company's name/ Designation" />
                        </div>
                        <div className="form-group mb-3">
                            <textarea onBlur={handleBlur} class="form-control" type="text" rows="3" name="description" placeholder="Description" />
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