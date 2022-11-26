import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingelProduct from '../SingelProduct/SingelProduct';

const CategoryProducts = () => {
    const data = useLoaderData()
    const products = data
    console.log(products);
    return (
        <section className='bg-whtie my-10'>
            {/* this on for large screen */}
            <div className=''>
                <h1 className='text-black text-lg lg:text-3xl text-center mt-5 font-bold'>
                    Available Products for {data[0]?.CategoryName ? <span className='text-3xl lg:text-5xl text-amber-400 uppercase'>{data[0]?.CategoryName}</span> : ''}  Category
                </h1>
            </div>
            <div className='mx-10 my-5 lg:my-10'>
                {
                    products.map(product => <SingelProduct
                        key={product._id}
                        product={product}
                    ></SingelProduct>)
                }
            </div>
        </section>
    );
};

export default CategoryProducts;