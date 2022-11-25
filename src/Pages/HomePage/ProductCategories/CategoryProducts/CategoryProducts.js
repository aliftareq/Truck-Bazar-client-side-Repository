import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryProducts = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <h1>All Product will be shown here category wise</h1>
        </div>
    );
};

export default CategoryProducts;