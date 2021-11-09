import React, { useState, useEffect } from 'react';
import FeedbackCardDetails from '../FeedbackCardDetails/FeedbackCardDetails';

const FeedbackCard = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/allReview')
            .then(res => res.json())
            .then(data => setReview(data))

    }, [])
    return (
        <div className="container my-4 py-4">
            <h2 className=" py-5" style={{ textAlign: 'center' }}> Client <span style={{ color: 'orange' }}>Feedback</span> </h2> <hr />
            <div className="row">
                {
                    review.map(client => <FeedbackCardDetails client={client} key={client._id}></FeedbackCardDetails>)
                }
            </div>
        </div>
    );
};

export default FeedbackCard;