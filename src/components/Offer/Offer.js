import React from 'react';
import fruit from '../../assests/images/fruits.jpg';

const Offer = () => {
    return (
        <div className='container py-10'>
            <h2 className='text-2xl font-medium text-center py-2'>Latest Discounted Products</h2>
            <p className='text-center'>See Our latest discounted products below. Choose <br /> your daily needs from here and get a special <br /> discount with free shipping.</p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className='p-2 relative'>
                        <img src={fruit} alt="" className='w-full h-36 p-1 transform transition duration-300 rounded-2xl hover:scale-105' />
                        <span className='absolute right-6 top-5 bg-secondary py-1 px-2 rounded text-white text-xs'>17% Off</span>
                        <div className=''>
                            <h4 className='text-md text-gray-700'>Good Fruits</h4>
                            <div className='flex items-center mb-1 gap-1 text-xs text-yellow-400'>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <p className='text-gray-800 text-sm ml-3'>(30)</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <h2 className='text-2xl font-medium'>$13</h2>
                                    <h3 className='ml-2 text-xl text-gray-500'><del>$15</del></h3>
                                </div>
                                <span><i className='fas fa-shopping-bag border border-gray-200 p-2 rounded text-primary hover:text-white hover:bg-primary transition'></i></span>
                            </div>

                            <div className='pt-2'>
                                <a href="#" className='bg-secondary w-full block text-center text-white text-lg py-1 border border-secondary rounded hover:bg-transparent hover:text-secondary'>Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className='p-2 relative'>
                        <img src={fruit} alt="" className='w-full h-36 p-1 transform transition duration-300 rounded-2xl hover:scale-105' />
                        <span className='absolute right-6 top-5 bg-secondary py-1 px-2 rounded text-white text-xs'>17% Off</span>
                        <div className=''>
                            <h4 className='text-md text-gray-700'>Good Fruits</h4>
                            <div className='flex items-center mb-1 gap-1 text-xs text-yellow-400'>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <p className='text-gray-800 text-sm ml-3'>(30)</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <h2 className='text-2xl font-medium'>$13</h2>
                                    <h3 className='ml-2 text-xl text-gray-500'><del>$15</del></h3>
                                </div>
                                <span><i className='fas fa-shopping-bag border border-gray-200 p-2 rounded text-primary hover:text-white hover:bg-primary transition'></i></span>
                            </div>

                            <div className='pt-2'>
                                <a href="#" className='bg-secondary w-full block text-center text-white text-lg py-1 border border-secondary rounded hover:bg-transparent hover:text-secondary'>Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className='p-2 relative'>
                        <img src={fruit} alt="" className='w-full h-36 p-1 transform transition duration-300 rounded-2xl hover:scale-105' />
                        <span className='absolute right-6 top-5 bg-secondary py-1 px-2 rounded text-white text-xs'>17% Off</span>
                        <div className=''>
                            <h4 className='text-md text-gray-700'>Good Fruits</h4>
                            <div className='flex items-center mb-1 gap-1 text-xs text-yellow-400'>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <p className='text-gray-800 text-sm ml-3'>(30)</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <h2 className='text-2xl font-medium'>$13</h2>
                                    <h3 className='ml-2 text-xl text-gray-500'><del>$15</del></h3>
                                </div>
                                <span><i className='fas fa-shopping-bag border border-gray-200 p-2 rounded text-primary hover:text-white hover:bg-primary transition'></i></span>
                            </div>

                            <div className='pt-2'>
                                <a href="#" className='bg-secondary w-full block text-center text-white text-lg py-1 border border-secondary rounded hover:bg-transparent hover:text-secondary'>Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className='p-2 relative'>
                        <img src={fruit} alt="" className='w-full h-36 p-1 transform transition duration-300 rounded-2xl hover:scale-105' />
                        <span className='absolute right-6 top-5 bg-secondary py-1 px-2 rounded text-white text-xs'>17% Off</span>
                        <div className=''>
                            <h4 className='text-md text-gray-700'>Good Fruits</h4>
                            <div className='flex items-center mb-1 gap-1 text-xs text-yellow-400'>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <p className='text-gray-800 text-sm ml-3'>(30)</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <h2 className='text-2xl font-medium'>$13</h2>
                                    <h3 className='ml-2 text-xl text-gray-500'><del>$15</del></h3>
                                </div>
                                <span><i className='fas fa-shopping-bag border border-gray-200 p-2 rounded text-primary hover:text-white hover:bg-primary transition'></i></span>
                            </div>

                            <div className='pt-2'>
                                <a href="#" className='bg-secondary w-full block text-center text-white text-lg py-1 border border-secondary rounded hover:bg-transparent hover:text-secondary'>Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className='p-2 relative'>
                        <img src={fruit} alt="" className='w-full h-36 p-1 transform transition duration-300 rounded-2xl hover:scale-105' />
                        <span className='absolute right-6 top-5 bg-secondary py-1 px-2 rounded text-white text-xs'>17% Off</span>
                        <div className=''>
                            <h4 className='text-md text-gray-700'>Good Fruits</h4>
                            <div className='flex items-center mb-1 gap-1 text-xs text-yellow-400'>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <p className='text-gray-800 text-sm ml-3'>(30)</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <h2 className='text-2xl font-medium'>$13</h2>
                                    <h3 className='ml-2 text-xl text-gray-500'><del>$15</del></h3>
                                </div>
                                <span><i className='fas fa-shopping-bag border border-gray-200 p-2 rounded text-primary hover:text-white hover:bg-primary transition'></i></span>
                            </div>

                            <div className='pt-2'>
                                <a href="#" className='bg-secondary w-full block text-center text-white text-lg py-1 border border-secondary rounded hover:bg-transparent hover:text-secondary'>Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className='p-2 relative'>
                        <img src={fruit} alt="" className='w-full h-36 p-1 transform transition duration-300 rounded-2xl hover:scale-105' />
                        <span className='absolute right-6 top-5 bg-secondary py-1 px-2 rounded text-white text-xs'>17% Off</span>
                        <div className=''>
                            <h4 className='text-md text-gray-700'>Good Fruits</h4>
                            <div className='flex items-center mb-1 gap-1 text-xs text-yellow-400'>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <p className='text-gray-800 text-sm ml-3'>(30)</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <h2 className='text-2xl font-medium'>$13</h2>
                                    <h3 className='ml-2 text-xl text-gray-500'><del>$15</del></h3>
                                </div>
                                <span><i className='fas fa-shopping-bag border border-gray-200 p-2 rounded text-primary hover:text-white hover:bg-primary transition'></i></span>
                            </div>

                            <div className='pt-2'>
                                <a href="#" className='bg-secondary w-full block text-center text-white text-lg py-1 border border-secondary rounded hover:bg-transparent hover:text-secondary'>Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className='p-2 relative'>
                        <img src={fruit} alt="" className='w-full h-36 p-1 transform transition duration-300 rounded-2xl hover:scale-105' />
                        <span className='absolute right-6 top-5 bg-secondary py-1 px-2 rounded text-white text-xs'>17% Off</span>
                        <div className=''>
                            <h4 className='text-md text-gray-700'>Good Fruits</h4>
                            <div className='flex items-center mb-1 gap-1 text-xs text-yellow-400'>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <p className='text-gray-800 text-sm ml-3'>(30)</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <h2 className='text-2xl font-medium'>$13</h2>
                                    <h3 className='ml-2 text-xl text-gray-500'><del>$15</del></h3>
                                </div>
                                <span><i className='fas fa-shopping-bag border border-gray-200 p-2 rounded text-primary hover:text-white hover:bg-primary transition'></i></span>
                            </div>

                            <div className='pt-2'>
                                <a href="#" className='bg-secondary w-full block text-center text-white text-lg py-1 border border-secondary rounded hover:bg-transparent hover:text-secondary'>Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className='p-2 relative'>
                        <img src={fruit} alt="" className='w-full h-36 p-1 transform transition duration-300 rounded-2xl hover:scale-105' />
                        <span className='absolute right-6 top-5 bg-secondary py-1 px-2 rounded text-white text-xs'>17% Off</span>
                        <div className=''>
                            <h4 className='text-md text-gray-700'>Good Fruits</h4>
                            <div className='flex items-center mb-1 gap-1 text-xs text-yellow-400'>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <p className='text-gray-800 text-sm ml-3'>(30)</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <h2 className='text-2xl font-medium'>$13</h2>
                                    <h3 className='ml-2 text-xl text-gray-500'><del>$15</del></h3>
                                </div>
                                <span><i className='fas fa-shopping-bag border border-gray-200 p-2 rounded text-primary hover:text-white hover:bg-primary transition'></i></span>
                            </div>

                            <div className='pt-2'>
                                <a href="#" className='bg-secondary w-full block text-center text-white text-lg py-1 border border-secondary rounded hover:bg-transparent hover:text-secondary'>Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className='p-2 relative'>
                        <img src={fruit} alt="" className='w-full h-36 p-1 transform transition duration-300 rounded-2xl hover:scale-105' />
                        <span className='absolute right-6 top-5 bg-secondary py-1 px-2 rounded text-white text-xs'>17% Off</span>
                        <div className=''>
                            <h4 className='text-md text-gray-700'>Good Fruits</h4>
                            <div className='flex items-center mb-1 gap-1 text-xs text-yellow-400'>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <p className='text-gray-800 text-sm ml-3'>(30)</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <h2 className='text-2xl font-medium'>$13</h2>
                                    <h3 className='ml-2 text-xl text-gray-500'><del>$15</del></h3>
                                </div>
                                <span><i className='fas fa-shopping-bag border border-gray-200 p-2 rounded text-primary hover:text-white hover:bg-primary transition'></i></span>
                            </div>

                            <div className='pt-2'>
                                <a href="#" className='bg-secondary w-full block text-center text-white text-lg py-1 border border-secondary rounded hover:bg-transparent hover:text-secondary'>Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className='p-2 relative'>
                        <img src={fruit} alt="" className='w-full h-36 p-1 transform transition duration-300 rounded-2xl hover:scale-105' />
                        <span className='absolute right-6 top-5 bg-secondary py-1 px-2 rounded text-white text-xs'>17% Off</span>
                        <div className=''>
                            <h4 className='text-md text-gray-700'>Good Fruits</h4>
                            <div className='flex items-center mb-1 gap-1 text-xs text-yellow-400'>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <p className='text-gray-800 text-sm ml-3'>(30)</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <h2 className='text-2xl font-medium'>$13</h2>
                                    <h3 className='ml-2 text-xl text-gray-500'><del>$15</del></h3>
                                </div>
                                <span><i className='fas fa-shopping-bag border border-gray-200 p-2 rounded text-primary hover:text-white hover:bg-primary transition'></i></span>
                            </div>

                            <div className='pt-2'>
                                <a href="#" className='bg-secondary w-full block text-center text-white text-lg py-1 border border-secondary rounded hover:bg-transparent hover:text-secondary'>Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;