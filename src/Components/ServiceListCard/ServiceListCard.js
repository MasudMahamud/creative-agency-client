import Button from '@mui/material/Button';
import React from 'react';
import { Card } from 'semantic-ui-react'

const ServiceListCard = ({ data }) => {

    return (
        <div className="col-md-4 col-sm-6 col-12 p-3 mb-2">

            <h5 className="join-title"> Your order</h5>
            <Card.Group>
                <Card className="p-3 text-center">
                    <Card.Content>
                        {/* <Image
                            floated='right'
                            width='18%'
                            src={service.img}
                        /> */}
                        <Card.Header className="m-3"> <strong>{data.title}</strong> </Card.Header>

                        <Card.Description>
                            {data.projectDetails}
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