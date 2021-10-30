import React from 'react';
import FeedbackCardDetails from '../FeedbackCardDetails/FeedbackCardDetails';

const ClientDetails = [

    {
        id: '1',
        name: 'Nash Patrik',
        designation: 'CEO, Manpol',
        imagUrl: '/image/customer/customer-1.png',
        description: `Some quick example text to build on the card title and make up the bulk of the card's content.`
    },
    {
        id: '2',
        name: 'Miriam Barron',
        designation: 'CEO, Manpol',
        imagUrl: '/image/customer/customer-2.png',
        description: `Some quick example text to build on the card title and make up the bulk of the card's content.`
    },
    {
        id: '3',
        name: 'Bria Malone',
        designation: 'CEO, Manpol',
        imagUrl: '/image/customer/customer-3.png',
        description: `Some quick example text to build on the card title and make up the bulk of the card's content.`
    },
]
const FeedbackCard = () => {
    return (
        <div className="container my-4 py-4">
            <h2 className=" py-5" style={{ textAlign: 'center' }}> Client <span style={{ color: 'orange' }}>Feedback</span> </h2> <hr />
            <div className="row">
                {
                    ClientDetails.map(client => <FeedbackCardDetails client={client} key={client.id}></FeedbackCardDetails>)
                }
            </div>
        </div>
    );
};

export default FeedbackCard;