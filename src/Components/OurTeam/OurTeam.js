import React from 'react';
import NavBar from '../Home/Shared/NavBar/NavBar';
import OurTeamDetails from '../OurTeamDetails/OurTeamDetails';

const teamInfo = [
    {
        id:'1',
        name:'David',
        designation:'Graphic Designer',
        img:'/image/team/dev1.png'
    },
    {
        id:'2',
        name:'Martin',
        designation:'web Designer',
        img:'/image/team/dev2.png'
    },
    {
        id:'3',
        name:'Md Masud',
        designation:'web Developer',
        img:'/image/team/dev1.png'
    },
    {
        id:'4',
        name:'Rj Roy',
        designation:'SEO Expert',
        img:'/image/team/dev2.png'
    },
]

const OurTeam = () => {
    return (
        <div className="container"  style={{padding:'2em'}}>
            <NavBar></NavBar>
            <div className="row">
                {
                  teamInfo.map(data => <OurTeamDetails data={data} key={data.id}></OurTeamDetails>)  
                }
            </div>
        </div>
    );
};

export default OurTeam;