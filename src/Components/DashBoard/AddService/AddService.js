import React from 'react';
import SideBar from '../../SlideBar/SideBar';

const handleBlur = data => console.log(data);

const handleSubmit = data => console.log(data);

const AddService = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10" style={{backgroundColor: 'azure'}}>
                    <div className="p-5">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3" style={{ width: '50%', float: 'left' }}>
                                <div class="form-group mb-3">
                                    <label for="title">Title:</label>
                                    <input onBlur={handleBlur} type="text" class="form-control" name="title" placeholder="title" />
                                </div>
                                <div className="form-group mb-3">
                                    <label for="description">Description:</label>
                                    <textarea onBlur={handleBlur} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="description" />
                                </div>


                            </div>
                            <div style={{ width: '40%', float: 'right' }}>
                                <div class="form-group ms-2">
                                    <label for="Icon">Icon:</label>
                                    <input onBlur={handleBlur} type="file" class="form-control" />
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