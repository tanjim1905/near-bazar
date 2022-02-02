import React from 'react';
import delivery from '../../assests/images/delivery-boy.png';

const Delivery = () => {
    return (
        <div className='px-10 flex items-center py-6 mt-10 rounded-2xl bg-white'>
            <div>
                <h2 className='text-xl font-medium'>Organic Products and Food</h2>
                <h1 className='text-3xl font-bold py-2'>Quic Delivery to <span className='text-primary'>Your Home</span></h1>
                <p className='leading-1 font-poppins text-sm mb-8'>There are many products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer. See Our latest discounted products from here and get a special discount.</p>
                <a href="#" className='bg-secondary px-5 py-3 rounded-full text-white border border-secondary hover:bg-white hover:text-secondary'>Shop Now</a>
            </div>
            <div className='w-full p-5'>
                <img src={delivery} alt="" />
            </div>
        </div>
    );
};

export default Delivery;