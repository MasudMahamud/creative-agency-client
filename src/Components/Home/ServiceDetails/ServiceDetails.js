import { Grid, Card, Text } from '@nextui-org/react';
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = ({ service }) => {
    return (

        <div className="col-md-4 col-sm-6 mt-5">
            <Link to={"/order/" + service.title}>
                <Grid.Container >
                    <Grid>
                        <Card hoverable clickable width="100%">
                            <Card.Body >
                                <Card.Image
                                    src={service.img}
                                    width='20%'
                                    height={'100px'}
                                    alt={service.title}
                                />
                                <Text b className="my-3" style={{ textAlign: 'center' }}>
                                    {service.title}
                                </Text>
                                <Text style={{ textAlign: 'center' }}>
                                    {service.description}
                                </Text>
                            </Card.Body>
                        </Card>
                    </Grid>
                </Grid.Container>
            </Link>
        </div>
    );
};

export default ServiceDetails;