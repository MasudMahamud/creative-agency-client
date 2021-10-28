import React from 'react';

const SponsorDetails = ({data}) => {
    return (
        <div className='col-md-2 col-sm-4 col-6 p-2'>
            <img style={{width:'100px'}} src={data.imagUrl} alt="" />
        </div>
    );
};

export default SponsorDetails;