import React from 'react';
import SponsorDetails from '../SponsorDetails/SponsorDetails';

const sponsorData = [
    {
        id: '1',
        imagUrl: '/image/sponser/airbnb.png'
    },
    {
        id: '2',
        imagUrl: '/image/sponser/google.png'
    },
    {
        id: '3',
        imagUrl: '/image/sponser/netflix.png'
    },
    {
        id: '4',
        imagUrl: '/image/sponser/slack.png'
    },
    {
        id: '5',
        imagUrl: '/image/sponser/uber.png'
    },
]

const Sponsor = () => {
    return (
        <div className="container">
            <div className="row my-4" style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                {
                    sponsorData.map(data => <SponsorDetails data={data} key={data.id}></SponsorDetails>)
                }
            </div>
        </div>
    );
};

export default Sponsor;