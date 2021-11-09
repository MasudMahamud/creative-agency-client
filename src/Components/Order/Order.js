import React, { useContext } from 'react';
import SideBar from '../SlideBar/SideBar';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { name } = useParams();

    const onSubmit = data => {
        fetch('http://localhost:4000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result === false) {
                    alert('Thanks for order!')
                }
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10" style={{ backgroundColor: 'azure' }}>
                    <h4 className="pt-3 ms-2" style={{ color: '#888' }}>Order</h4> <hr />

                    <form className="p-4 rounded" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="text" {...register('name', { required: true })} name="name" placeholder="Your name/company's name" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div> <br />
                        <div className="form-group">
                            <input type="text" {...register('email', { required: true })} name="email" value={loggedInUser.email} placeholder="Your email" className="form-control" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div><br />
                        <div className="form-group">
                            <input type="text" {...register('title', { required: true })} name="title" value={name} placeholder="project title" className="form-control" />
                            {errors.title && <span className="text-danger">This field is required</span>}
                        </div><br />
                        <div className="form-group">
                            <textarea type="text" {...register('projectDetails', { required: true })} name="projectDetails" placeholder="project details" className="form-control" />
                            {errors.projectDetails && <span className="text-danger">This field is required</span>}
                        </div><br />

                        <div className="float-left mb-4 ">
                            <div className="form-group float-sm-start" >
                                <label for="ProjectPrice">Project Price:</label>
                                <input type="number" {...register('price', { required: true })} name="price" placeholder="price" className="form-control" />
                                {errors.price && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group float-sm-end">
                                <label for="exampleInputPassword1">Upload project file:</label>
                                <input type="file" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group">
                            <button type="submit" class="btn btn-secondary">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;