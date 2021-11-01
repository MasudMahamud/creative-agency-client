import React from 'react';
import SideBar from '../SlideBar/SideBar';


const handleBlur = data => console.log(data);

const handleSubmit = data => console.log(data);

const Order = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10">
                    <h4 className="pt-3 ms-2" style={{ color: '#888' }}>Order</h4> <hr />
                    <div className="p-2">
                        <form onSubmit={handleSubmit}>
                            <div class="form-group mb-3">
                                <input onBlur={handleBlur} className="form-control" type="text" class="form-control" name="name" placeholder="Your name/company's name" />
                            </div>
                            <div class="form-group mb-3">
                                <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="Your email" />
                            </div>
                            <div class="form-group mb-3">
                                <input onBlur={handleBlur} type="text" class="form-control" name="title" placeholder="Your title" />
                            </div>
                            <div className="form-group mb-3">
                                <textarea onBlur={handleBlur} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="project details" />
                            </div>
                            <div className="float-left mb-3">
                                <div class="form-group mb-3 float-sm-start">
                                    <input onBlur={handleBlur} type="number" class="form-control" name="price" placeholder="price" />
                                </div>
                                <div class="form-group mb-3 float-sm-end">
                                    <label for="exampleInputPassword1">Upload project file:</label>
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

export default Order;