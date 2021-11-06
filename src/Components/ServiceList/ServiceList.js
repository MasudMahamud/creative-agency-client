import React from 'react';
import ServiceListCard from '../ServiceListCard/ServiceListCard';
import SideBar from '../SlideBar/SideBar';


const serviceListInfo = [
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
]

const ServiceList = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                
                {
                    serviceListInfo.map(service => <ServiceListCard service={service} key={service.id}></ServiceListCard>)
                }
                
            </div>
        </div>
    );
};

export default ServiceList;