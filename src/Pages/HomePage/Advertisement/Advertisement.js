import axios from 'axios';
import React, { useState } from 'react';
import banner from '../../../Assets/images/advertisementBanner.jpg'
import AdvertiseItem from './AdvertiseItem/AdvertiseItem';

const Advertisement = () => {

    //states
    const [products, SetProducts] = useState([])

    //loading data 
    axios.get(`http://localhost:5000/advertiseProducts`)
        .then(data => {
            //console.log(data.data)
            SetProducts(data.data)
        })
    return (
        <div>
            {
                products.length === 0
                    ? ''
                    :
                    <section className="py-6 sm:py-12 dark:text-gray-100">
                        <div className="container p-6 mx-auto space-y-8">
                            <div className='flex justify-center'>
                                <img className='h-64 lg:h-96 w-64 lg:w-full' src={banner} alt="" />
                            </div>
                            <div className="space-y-2 text-center">
                                <h2 className="text-3xl font-bold text-yellow-400">Super Discount on Every Product</h2>
                                <p className="font-serif text-sm dark:text-gray-400">Buy any of these product and get licensing and documentation cost free.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                                {
                                    products.map(product =>
                                        <AdvertiseItem
                                            key={product._id}
                                            product={product}
                                        ></AdvertiseItem>
                                    )
                                }

                            </div>
                        </div>
                    </section>
            }
        </div>
    );
};

export default Advertisement;