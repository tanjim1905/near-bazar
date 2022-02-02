import React from 'react';
import { Link } from 'react-router-dom';

const HeaderTop = () => {
    return (
        <div className='py-4 shadow-sm bg-primary hidden md:block'>
            <div className="container flex items-center justify-between">
                <div className="logo text-white">
                    <Link to="/" className='flex space-x-1 items-center'>
                        <span className='text-4xl'><i className='fas fa-shopping-bag'></i></span>
                        <div className='flex flex-col -space-y-2 uppercase'>
                            <span className='text-xl font-bold'>Near</span>
                            <span className='text-l tracking-widest'>Bazar</span>
                        </div>
                    </Link>
                </div>

                <div className="w-full max-w-xl bg-white flex relative border rounded-md border-white">
                    <span className='abosolute text-lg text-gray-400 p-2'>
                        <i className='fas fa-search'></i>
                    </span>

                    <input type="text" className='w-full focus:outline-none' placeholder='Search for products (e.g. fish, apple, oil)' />

                    <button className='bg-primary border-2 border-white text-white px-8 rounded-r-md hover:bg-white hover:text-primary hover:border-primary transition text-xl'>Search</button>
                </div>

                <div className="flex items-center space-x-4">
                    <a href="#" className='text-center text-gray-700 hover:text-white transition relative'>
                        <div className='text-2xl'>
                            <i className='far fa-heart'></i>
                        </div>
                        <div className='text-xs leading-3'>Wish List</div>
                        <span className='absolute right-0 -top-1 w-5 rounded-full flex items-center justify-center bg-secondary text-white text-xs'>8</span>
                    </a>

                    <a href="#" className='text-center text-gray-700 hover:text-white transition relative'>
                        <div className='text-2xl'>
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <div className='text-xs leading-3'>Cart</div>
                        <span className='absolute -right-3 -top-1 w-5 rounded-full flex items-center justify-center bg-secondary text-white text-xs'>8</span>
                    </a>

                    <a href="#" className='text-center text-gray-700 hover:text-white transition relative'>
                        <div className='text-2xl'>
                            <i className="fas fa-user-alt"></i>
                        </div>
                        <div className='text-xs leading-3'>Account</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;