import React from 'react';
import pickup from '../../../Assets/truck-Images/pick-up.png'
import truck from '../../../Assets/truck-Images/trucks.png'
import trailor from '../../../Assets/truck-Images/trailor.png'

const ProductCategories = () => {
    return (
        <section className='bg-gray-600 py-5'>
            <div className='my-5'>
                <p className='text-center text-3xl text-white font-semibold'>Find the perfect used truck for you here</p>
            </div>
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className="card w-64 lg:w-96 bg-orange-500 hover:bg-white text-white hover:text-black shadow-xl flex justify-center items-center">
                        <div className="card-body">
                            <img className='w-60' src={pickup} alt="" />
                            <p className='text-center text-lg font-extrabold'>PickUp</p>
                        </div>
                    </div>
                    <div className="card w-64 lg:w-96 bg-orange-500 hover:bg-white text-white hover:text-black shadow-xl flex justify-center items-center">
                        <div className="card-body">
                            <img className='w-60' src={truck} alt="" />
                            <p className='text-center text-lg font-extrabold'>Trucks /Cover-Van</p>
                        </div>
                    </div>
                    <div className="card w-64 lg:w-96 bg-orange-500 hover:bg-white text-white hover:text-black shadow-xl flex justify-center items-center">
                        <div className="card-body">
                            <img className='w-60' src={trailor} alt="" />
                            <p className='text-center text-lg font-extrabold'>Trailor</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;