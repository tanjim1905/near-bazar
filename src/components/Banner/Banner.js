import React from 'react';
import banner from '../../assests/images/banner.jpg';

const Banner = () => {
    return (
        <div className='bg-cover bg-no-repeat bg-center py-24' style={{ backgroundImage: `url(${banner})` }}>
            <div className="container">
                <h1 className='text-6xl text-gray-800 font-medium mb-4 capitalize'>Quality Freshness <br /> Guaranted!</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Nostrum cumque iste non dolorem ex eligendi id porro dolores, nobis nesciunt.</p>

                <div className='mt-12'>
                <a href="#" className='bg-secondary border border-secondary rounded text-white px-8 py-3 hover:bg-transparent hover:text-secondary transition duration-300'>Shop</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;