import React from 'react';

const Features = () => {
    return (
        <div className='container py-16'>
            <div className='w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center'>
                <div className='border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
                    <div>
                        <i class="fas fa-shipping-fast text-4xl text-primary"></i>
                    </div>
                    <div>
                        <h4 className='font-medium capitalize text-lg'>Free Shipping</h4>
                        <p className='text-gray-500 text-sm'>order over $200</p>
                    </div>
                </div>
                
                <div className='border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
                    <div>
                        <i class="fas fas fa-hand-holding-usd text-4xl text-primary"></i>
                    </div>
                    <div>
                        <h4 className='font-medium capitalize text-lg'>Money Returns</h4>
                        <p className='text-gray-500 text-sm'>30 days money returns</p>
                    </div>
                </div>

                <div className='border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
                    <div>
                        <i class="fas fa-blender-phone text-4xl text-primary"></i>
                    </div>
                    <div>
                        <h4 className='font-medium capitalize text-lg'>24/7 supports</h4>
                        <p className='text-gray-500 text-sm'>Customer Support</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;