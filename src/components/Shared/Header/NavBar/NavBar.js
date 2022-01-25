import React from 'react';

const NavBar = () => {
    return (
        <div className='bg-white border-b border-gray-200'>
            <div className="container flex">
                <div className='py-4 flex items-center cursor-pointer relative group'>
                    <span className='capitalize ml-2 text-black hover:text-primary transition'>All Categories<i class="fas fa-angle-down ml-2"></i></span>

                    <div className='absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divided-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible'>
                        <a href="#" className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                            <i class="fas fa-apple-alt"></i>
                            <span className='ml-6 text-gray-600 text-sm'>Fruits</span>
                        </a>
                        <a href="#" className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                            <i class="fas fa-apple-alt"></i>
                            <span className='ml-6 text-gray-600 text-sm'>Fruits</span>
                        </a>
                        <a href="#" className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                            <i class="fas fa-apple-alt"></i>
                            <span className='ml-6 text-gray-600 text-sm'>Fruits</span>
                        </a>
                        <a href="#" className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                            <i class="fas fa-apple-alt"></i>
                            <span className='ml-6 text-gray-600 text-sm'>Fruits</span>
                        </a>
                        <a href="#" className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                            <i class="fas fa-apple-alt"></i>
                            <span className='ml-6 text-gray-600 text-sm'>Fruits</span>
                        </a>
                    </div>
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