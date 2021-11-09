import React, { useContext, useEffect, useState } from 'react';
import ServiceListCard from '../ServiceListCard/ServiceListCard';
import SideBar from '../SlideBar/SideBar';
import { UserContext } from './../../App';

const ServiceList = () => {
    const [service, setService] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/uniqueOrder?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>

                {                   
                    service.map(data => <ServiceListCard data={data} key={data._id}></ServiceListCard>)
                } 

            </div>
        </div>
    );
};

export default ServiceList;