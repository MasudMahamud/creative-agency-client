import React, { useState, useEffect } from 'react';
import SideBar from '../../SlideBar/SideBar';



const AddAdmin = () => {
    const [info, setInfo] = useState({});
    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/allAdmin')
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [])

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = e => {
        fetch('http://localhost:4000/addAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('admin successfully add')
                }
            })
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10" style={{ backgroundColor: 'azure' }}>
                    <div className="p-5">
                        <form onSubmit={handleSubmit}>
                            <div style={{ width: '50%' }}>
                                <div class="form-group mb-3">
                                    <label for="title">Email:</label>
                                    <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="add admin" />
                                </div>

                                <div className="submit-btn mt-3" style={{ width: '60px' }}>
                                    <button type="submit" class="btn btn-secondary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {
                        admin.map(data => <li> {data.email} </li> )
                    }
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;