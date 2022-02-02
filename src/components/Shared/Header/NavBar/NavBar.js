import { Transition } from '@headlessui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../../../../pages/Authentication/Login/Login';
import useFirebase from '../../../../utilities/hooks/useFirebase';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const { logout, user } = useFirebase();
    return (
        <>
            <div className='bg-white border-b border-gray-200 hidden md:block'>
                <div className="container flex">
                    <div className='py-4 flex items-center cursor-pointer relative group'>
                        <span className='capitalize ml-2 text-black hover:text-primary transition'>All Categories<i className="fas fa-angle-down ml-2"></i></span>

                        <div className='absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divided-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible'>
                            <a href="#" className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                                <i className="fas fa-apple-alt"></i>
                                <span className='ml-6 text-gray-600 text-sm'>Fruits</span>
                            </a>
                            <a href="#" className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                                <i className="fas fa-apple-alt"></i>
                                <span className='ml-6 text-gray-600 text-sm'>Fruits</span>
                            </a>
                            <a href="#" className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                                <i className="fas fa-apple-alt"></i>
                                <span className='ml-6 text-gray-600 text-sm'>Fruits</span>
                            </a>
                            <a href="#" className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                                <i className="fas fa-apple-alt"></i>
                                <span className='ml-6 text-gray-600 text-sm'>Fruits</span>
                            </a>
                            <a href="#" className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                                <i className="fas fa-apple-alt"></i>
                                <span className='ml-6 text-gray-600 text-sm'>Fruits</span>
                            </a>
                        </div>
                    </div>

                    <div className='flex items-center justify-between flex-grow pl-12'>
                        <div className='flex items-center space-x-6 capitalize'>
                            <Link to="/home" className='text-black hover:text-primary transition'>Home</Link>
                            <Link to="/about" className='text-black hover:text-primary transition'>About</Link>
                            <Link to="/shop" className='text-black hover:text-primary transition'>Shop</Link>
                            <Link to="/contact" className='text-black hover:text-primary transition'>Contact</Link>
                            <Link to="/offer" className='text-black hover:text-primary transition'>Offers</Link>
                            {user.email ? <button onClick={logout}>Logout</button> : <button onClick={() => setShowLogin(true)}>Login</button>}
                        </div>
                        <div className='space-x-6'>
                            <a href="#" className='text-black hover:text-primary'>Privacy Policy</a>
                            <a href="#" className='text-black hover:text-primary'>Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="-mr-2 flex md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    )}
                </button>
            </div>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a
                                href="#"
                                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Dashboard
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Team
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Projects
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Calendar
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Reports
                            </a>
                        </div>
                    </div>
                )}
            </Transition>
            {showLogin && <Login showLogin={showLogin} setShowLogin={setShowLogin} />}
        </>
    );
};

export default NavBar;