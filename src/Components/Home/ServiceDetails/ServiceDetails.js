import { Grid, Card, Text } from '@nextui-org/react';
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = ({ data }) => {
    return (

        <div className="col-md-4 col-sm-6 mt-5">
            <div className="style" style={{ margin: '10px' }}>
                <Link to={"/order/" + data.name}>

                    <Grid.Container >
                        <Grid>
                            <Card hoverable clickable width="450px" >
                                <Card.Body >
                                    {
                                        data.image ? <img style={{ width: '30%', margin: 'auto' }} src={`data:image/png;base64,${data.image.img}`} alt={data.name} />
                                            :
                                            <img style={{ width: '30%', textAlign: 'center' }} className='img-fluid' src={`http://localhost:4000/${data.img}`} alt="" />
                                    }

                                    <Text b className="my-3" style={{ textAlign: 'center' }}>
                                        {data.name}
                                    </Text>
                                    <Text style={{ textAlign: 'center' }}>
                                        {data.description}
                                    </Text>
                                </Card.Body>
                            </Card>
                        </Grid>
                    </Grid.Container>

                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;