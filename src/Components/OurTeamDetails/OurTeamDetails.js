import React from 'react';
import { Card } from 'react-bootstrap';

const OurTeamDetails = ({ data }) => {
    return (
        <div className="col-md-3 col-sm-4 col-12 my-3" >
            <Card style={{ width: '18rem', margin: 'auto' }}>
                <Card.Img variant="top" src={data.img} />
                <Card.Body>
                    <Card.Title style={{ color: 'tomato' }}>{data.name}</Card.Title>
                    <Card.Title style={{ color: 'orange' }}>{data.designation}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default OurTeamDetails;