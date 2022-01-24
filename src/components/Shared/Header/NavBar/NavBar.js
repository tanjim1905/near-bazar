import React from 'react';

const NavBar = () => {
    return (
        <div className='bg-white border-b border-gray-200'>
            <div className="container flex">
                <div className='px-8 py-4 bg-primary flex items-center cursor-pointer'>
                    <span>
                        <i className='fas fa-bars'></i>
                    </span>
                    <span className='capitalize ml-2 text-white'>All Categories</span>
                </div>

                <div className='flex items-center justify-between flex-grow pl-12'>
                    <div className='flex items-center space-x-6 capitalize'>
                        <a href="#" className='text-black hover:text-primary transition'>Home</a>
                        <a href="#" className='text-black hover:text-primary transition'>About</a>
                        <a href="#" className='text-black hover:text-primary transition'>Shop</a>
                        <a href="#" className='text-black hover:text-primary transition'>Contact</a>
                        <a href="#" className='text-black hover:text-primary transition'>Offers</a>
                    </div>
                    <div className='space-x-6'>
                        <a href="#" className='text-black hover:text-primary'>Privacy Policy</a>
                        <a href="#" className='text-black hover:text-primary'>Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;