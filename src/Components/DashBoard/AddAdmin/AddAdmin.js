import React from 'react';
import SideBar from '../../SlideBar/SideBar';

const handleBlur = data => console.log(data);

const handleSubmit = data => console.log(data);

const AddAdmin = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10" style={{backgroundColor: 'azure'}}>
                    <div className="p-5">
                        <form onSubmit={handleSubmit}>
                            <div style={{width: '50%'}}>
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
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;