import React from 'react';
import { Card } from 'react-bootstrap';
import img from '../../../images/logos/client.png'

const FeedbackCardDetails = ({ client }) => {

    return (
        <div className="col-md-4 my-4">
            <Card>
                <Card.Header> <img src={img} alt="" style={{ maxWidth: '60px' }} /> </Card.Header>
                <Card.Body>
                    <Card.Title>
                        <strong style={{ color: '#333' }}>{client.name} </strong><br />
                        <h6 style={{ color: 'tomato' }}>{client.designation}</h6>
                    </Card.Title>
                    <Card.Text style={{ color: '#666' }}>
                        {client.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FeedbackCardDetails;