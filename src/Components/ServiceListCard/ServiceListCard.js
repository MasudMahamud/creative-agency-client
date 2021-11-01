import Button from '@mui/material/Button';
import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const ServiceListCard = ({ service }) => {
    return (
        <div className="col-md-4 col-sm-6 col-6 mt-5">
            <Card.Group>
                <Card className="p-3 text-center">
                    <Card.Content>
                        <Image
                            floated='right'
                            width='18%'
                            src={service.img}
                        />
                        <Card.Header className="m-3"> <strong>{service.title}</strong> </Card.Header>

                        <Card.Description>
                            {service.description}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content className="p-3">
                        <Button variant="outlined">pending</Button>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    );
};

export default ServiceListCard;