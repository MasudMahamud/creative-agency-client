import React, { useState } from 'react';
import SideBar from '../../SlideBar/SideBar';


const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name);
        formData.append('description', info.description);


        fetch('http://localhost:4000/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10" style={{ backgroundColor: 'azure' }}>
                    <div className="p-5">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3" style={{ width: '50%', float: 'left' }}>
                                <div class="form-group mb-3">
                                    <label for="title">Title:</label>
                                    <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="title" />
                                </div>
                                <div className="form-group mb-3">
                                    <label for="description">Description:</label>
                                    <textarea onBlur={handleBlur} type="text" class="form-control" name="description" rows="3" placeholder="description" />
                                </div>
                            </div>
                            <div style={{ width: '40%', float: 'right' }}>
                                <div class="form-group ms-2">
                                    <label for="Icon">Icon:</label>
                                    <input onBlur={handleFileChange} type="file" class="form-control" placeholder="upload icon" />
                                </div>
                            </div>
                            <div className="submit-btn mt-3" style={{ width: '60px' }}>
                                <button type="submit" class="btn btn-secondary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;