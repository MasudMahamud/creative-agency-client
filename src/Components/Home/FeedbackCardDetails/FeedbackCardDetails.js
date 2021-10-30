import React from 'react';
import { Card } from 'react-bootstrap';

const FeedbackCardDetails = ({ client }) => {
    return (
        <div className="col-md-4 my-4">
            <Card>
                <Card.Header> <img src={client.imagUrl} alt="" style={{ maxWidth: '60px' }} /> </Card.Header>
                <Card.Body>
                    <Card.Title>
                        <strong>{client.name} </strong><br />
                        {client.designation}
                    </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FeedbackCardDetails;