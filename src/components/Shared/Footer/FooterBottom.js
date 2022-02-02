import React from 'react';
import paypal from '../../../assests/images/paypal.png';

const FooterBottom = () => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-x-10 items-center bg-gray-200 px-12 py-8 rounded-lg mt-6'>
                <div>
                    <p>Follow us</p>
                    <div className='flex gap-x-3 text-white text-xl'>
                        <a href="#" className='bg-blue-900 w-10 h-10 p-2 text-center rounded-full'><i className='fab fa-facebook-f'></i></a>
                        <a href="#" className='bg-cyan-600 w-10 h-10 p-2 text-center rounded-full'><i className='fab fa-twitter'></i></a>
                        <a href="#" className='bg-red-700 w-10 h-10 p-2 text-center rounded-full'><i className='fab fa-pinterest-p'></i></a>
                        <a href="#" className='bg-sky-700 w-10 h-10 p-2 text-center rounded-full'><i className='fab fa-linkedin-in'></i></a>
                        <a href="#" className='bg-green-600 w-10 h-10 p-2 text-center rounded-full'><i className='fab fa-whatsapp'></i></a>
                    </div>
                </div>
                <div className='text-center'>
                    <p className='text-xs'>Call Us Today!</p>
                    <h2 className='2xl font-bold'>+012345-678900</h2>
                </div>
                <div className='w-full'>
                    <img src={paypal} alt="" />
                </div>
            </div>

            <p className='text-center py-6'>Copyright 2022 &copy <span className='text-primary'>Tanjim Ahmed</span>. All right reserves.</p>
        </div>
    );
};

export default FooterBottom;