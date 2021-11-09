import React,{ useEffect, useState } from 'react';
import SideBar from '../../SlideBar/SideBar';
import AllServiceListDetails from '../AllServiceListDetails/AllServiceListDetails';

const AllServiceList = () => {
    const [service, setService] = useState([]);
   
    useEffect(() => {
        fetch('http://localhost:4000/allOrder')
        .then(res => res.json())
        .then(data => setService(data))
    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10">
                {
                    service.map(data => <AllServiceListDetails data={data} key={data._id}></AllServiceListDetails>)
                }
                </div>
            </div>
        </div>
    );
};

export default AllServiceList;