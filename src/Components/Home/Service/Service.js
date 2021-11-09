import React, { useState, useEffect } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Service = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/allService')
            .then(res => res.json())
            .then(data => setService(data))

    }, [])

    return (
        <div className="container">
            <div className="row my-5">
                <h3 className="text-center my-3"> Provide <span style={{ color: 'tomato' }}>Awesome</span> Service</h3> <hr />
                {
                    service.map(data => <ServiceDetails data={data} key={service._id}></ServiceDetails>)
                }
            </div>
        </div>
    );
};

export default Service;