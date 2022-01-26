import React from 'react';
import chicken from '../../assests/images/chicken.jpg';
import drinks from '../../assests/images/drinks.jpg';
import fish from '../../assests/images/fish.jpg';
import foods from '../../assests/images/foods.jpg';
import fruits from '../../assests/images/fruits.jpg';
import vegetable from '../../assests/images/vegetable.jpg';

const Categories = () => {
    return (
        <div className='container py-16'>
            <h2 className='text-3xl text-center font-medium text-gray-800 uppercase mb-6'>shop by category</h2>

            <div className='grid grid-cols-3 gap-3'>
                <div className='relative rounded-sm overflow-hidden group'>
                    <img src={foods} className='w-full h-60' alt="" />
                    <a href="#" className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'>Foods</a>
                </div>
                
                <div className='relative rounded-sm overflow-hidden group'>
                    <img src={fruits} className='w-full h-60' alt="" />
                    <a href="#" className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'>Fruits</a>
                </div>
                
                <div className='relative rounded-sm overflow-hidden group'>
                    <img src={vegetable} className='w-full h-60' alt="" />
                    <a href="#" className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'>Vegetable</a>
                </div>

                <div className='relative rounded-sm overflow-hidden group'>
                    <img src={chicken} className='w-full h-60' alt="" />
                    <a href="#" className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'>Chicken</a>
                </div>

                <div className='relative rounded-sm overflow-hidden group'>
                    <img src={fish} className='w-full h-60' alt="" />
                    <a href="#" className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'>Fish</a>
                </div>

                <div className='relative rounded-sm overflow-hidden group'>
                    <img src={drinks} className='w-full h-60' alt="" />
                    <a href="#" className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'>Drinks</a>
                </div>
            </div>
        </div>
    );
};

export default Categories;