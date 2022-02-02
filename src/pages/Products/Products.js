import React, { useState } from 'react';
import fruit from '../../assests/images/fruits.jpg';
import ProductModal from '../../components/Modal/ProductModal';

const Products = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className='container pb-10'>
                <h2 className='text-2xl font-medium text-gray-800 capitalize text-center'>Popular Products for Daily <br /> shopping</h2>

                <p className='text-center my-6'>See all our popular products in this week. You can <br /> choose your daily needs products from this list and <br /> get some special offer with free shipping.</p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className='p-2'>
                            <img onClick={() => setShowModal(true)} src={fruit} alt="" className='w-full h-36 p-1 transform transition duration-300 rounded-2xl hover:scale-105 cursor-pointer' />

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
                                    <h2 className='text-2xl font-medium'>$15</h2>
                                    <span><i className='fas fa-shopping-bag border border-gray-200 p-2 rounded text-primary hover:text-white hover:bg-primary transition'></i></span>
                                </div>

                                <div className='pt-2'>
                                    <a href="#" className='bg-secondary w-full block text-center text-white text-lg py-1 border border-secondary rounded hover:bg-transparent hover:text-secondary'>Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className='p-2'>
                            <img src={fruit} alt="" className='w-full h-36 p-1 transform transition duration-300 rounded-2xl hover:scale-105' />

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
                                    <h2 className='text-2xl font-medium'>$15</h2>
                                    <span><i className='fas fa-shopping-bag border border-gray-200 p-2 rounded text-primary hover:text-white hover:bg-primary transition'></i></span>
                                </div>

                                <div className='pt-2'>
                                    <a href="#" className='bg-secondary w-full block text-center text-white text-lg py-1 border border-secondary rounded hover:bg-transparent hover:text-secondary'>Details</a>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className='p-2'>
                            <img src={fruit} alt="" className='w-full h-36 p-1 transform transition duration-300 rounded-2xl hover:scale-105' />

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
                                    <h2 className='text-2xl font-medium'>$15</h2>
                                    <span><i className='fas fa-shopping-bag border border-gray-200 p-2 rounded text-primary hover:text-white hover:bg-primary transition'></i></span>
                                </div>

                                <div className='pt-2'>
                                    <a href="#" className='bg-secondary w-full block text-center text-white text-lg py-1 border border-secondary rounded hover:bg-transparent hover:text-secondary'>Details</a>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className='p-2'>
                            <img src={fruit} alt="" className='w-full h-36 p-1 transform transition duration-300 rounded-2xl hover:scale-105' />

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
                                    <h2 className='text-2xl font-medium'>$15</h2>
                                    <span><i className='fas fa-shopping-bag border border-gray-200 p-2 rounded text-primary hover:text-white hover:bg-primary transition'></i></span>
                                </div>

                                <div className='pt-2'>
                                    <a href="#" className='bg-secondary w-full block text-center text-white text-lg py-1 border border-secondary rounded hover:bg-transparent hover:text-secondary'>Details</a>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className='p-2'>
                            <img src={fruit} alt="" className='w-full h-36 p-1 transform transition duration-300 rounded-2xl hover:scale-105' />

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
                                    <h2 className='text-2xl font-medium'>$15</h2>
                                    <span><i className='fas fa-shopping-bag border border-gray-200 p-2 rounded text-primary hover:text-white hover:bg-primary transition'></i></span>
                                </div>

                                <div className='pt-2'>
                                    <a href="#" className='bg-secondary w-full block text-center text-white text-lg py-1 border border-secondary rounded hover:bg-transparent hover:text-secondary'>Details</a>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className='p-2'>
                            <img src={fruit} alt="" className='w-full h-36 p-1 transform transition duration-300 rounded-2xl hover:scale-105' />

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
                                    <h2 className='text-2xl font-medium'>$15</h2>
                                    <span><i className='fas fa-shopping-bag border border-gray-200 p-2 rounded text-primary hover:text-white hover:bg-primary transition'></i></span>
                                </div>

                                <div className='pt-2'>
                                    <a href="#" className='bg-secondary w-full block text-center text-white text-lg py-1 border border-secondary rounded hover:bg-transparent hover:text-secondary'>Details</a>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className='p-2'>
                            <img src={fruit} alt="" className='w-full h-36 p-1 transform transition duration-300 rounded-2xl hover:scale-105' />

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
                                    <h2 className='text-2xl font-medium'>$15</h2>
                                    <span><i className='fas fa-shopping-bag border border-gray-200 p-2 rounded text-primary hover:text-white hover:bg-primary transition'></i></span>
                                </div>

                                <div className='pt-2'>
                                    <a href="#" className='bg-secondary w-full block text-center text-white text-lg py-1 border border-secondary rounded hover:bg-transparent hover:text-secondary'>Details</a>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className='p-2'>
                            <img src={fruit} alt="" className='w-full h-36 p-1 transform transition duration-300 rounded-2xl hover:scale-105' />

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
                                    <h2 className='text-2xl font-medium'>$15</h2>
                                    <span><i className='fas fa-shopping-bag border border-gray-200 p-2 rounded text-primary hover:text-white hover:bg-primary transition'></i></span>
                                </div>

                                <div className='pt-2'>
                                    <a href="#" className='bg-secondary w-full block text-center text-white text-lg py-1 border border-secondary rounded hover:bg-transparent hover:text-secondary'>Details</a>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className='p-2'>
                            <img src={fruit} alt="" className='w-full h-36 p-1 transform transition duration-300 rounded-2xl hover:scale-105' />

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
                                    <h2 className='text-2xl font-medium'>$15</h2>
                                    <span><i className='fas fa-shopping-bag border border-gray-200 p-2 rounded text-primary hover:text-white hover:bg-primary transition'></i></span>
                                </div>

                                <div className='pt-2'>
                                    <a href="#" className='bg-secondary w-full block text-center text-white text-lg py-1 border border-secondary rounded hover:bg-transparent hover:text-secondary'>Details</a>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className='p-2'>
                            <img src={fruit} alt="" className='w-full h-36 p-1 transform transition duration-300 rounded-2xl hover:scale-105' />

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
                                    <h2 className='text-2xl font-medium'>$15</h2>
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
            {showModal && <ProductModal showModal={showModal} setShowModal={setShowModal}/>}
        </>
    );
};

export default Products;