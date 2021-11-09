import React from 'react';

const AllServiceListDetails = ({ data }) => {

    return (
        <div className="table-responsive">
            <table className="table table-borderless table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th className="text-secondary" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Name </th>
                        <th className="text-secondary" scope="col">Email</th>
                        <th className="text-secondary" scope="col">Title</th>
                        <th className="text-secondary" scope="col">Price</th>
                        <th className="text-secondary" scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> {1} </td>
                        <td> {data.name} </td>
                        <td> {data.email} </td>
                        <td> {data.title} </td>
                        <td> {data.price} </td>
                        <td> {data.projectDetails} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllServiceListDetails;