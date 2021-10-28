import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceList = [
    {
        id: '1',
        title: 'Web & Mobile Design',
        img: '/image/service/service1.png',
        description: 'we craft stunning and amazing web UI using a well drafted UX to fit your project'
    },
    {
        id: '2',
        title: 'Graphic Design',
        img: '/image/service/service2.png',
        description: 'we craft stunning and amazing web UI using a well drafted UX to fit your project'
    },
    {
        id: '3',
        title: 'Web Development',
        img: '/image/service/service3.png',
        description: 'we craft stunning and amazing web UI using a well drafted UX to fit your project'
    }
];
const Service = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <h3 className="text-center my-3"> Provide <span style={{ color: 'tomato' }}>Awesome</span> Service</h3> <hr />
                {
                    serviceList.map(service => <ServiceDetails service={service} key={service.id}></ServiceDetails>)
                }
            </div>
        </div>
    );
};

export default Service;