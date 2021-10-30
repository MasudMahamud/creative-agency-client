import React from 'react';
import HorizontalGallery from 'react-dynamic-carousel'


const WorkImage = [

    {
        id: '1',
        imagUrl: '/image/carosel/carousel-1.png'
    },
    {
        id: '2',
        imagUrl: '/image/carosel/carousel-2.png'
    },
    {
        id: '3',
        imagUrl: '/image/carosel/carousel-3.png'
    },
    {
        id: '4',
        imagUrl: '/image/carosel/carousel-4.png'
    },
    {
        id: '5',
        imagUrl: '/image/carosel/carousel-5.png'
    },

]

const WorkCarousel = () => {
    return (
        <div className="container my-5 py-5" style={{ backgroundColor: '#111430', height: '600px' }}>
            <h3 className="my-5" style={{ textAlign: 'center', color: '#ddd' }}> Here are some work of our </h3>
            <div className="row">
                <HorizontalGallery
                    tiles={WorkImage.map((value) => (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 350,
                                height: 270,
                                borderRadius: 10,
                                textAlign: 'center',
                            }}
                        >
                            <img style={{ width: '98%' }} src={value.imagUrl} alt="" />
                        </div>
                    ))}
                    elementWidth={400}
                    fadeDistance={100}
                    minPadding={10}
                    minMargin={10}
                />
            </div>
        </div>
    );
};

export default WorkCarousel;