import React from 'react';
import data from '../data';
import Product from '../components/Product';

export default function HomeScreen() {
    return (
        <div>
            <div className="row center">
                {
                    data.products.map(product => (
                        // create product Component and pass product Object as a product
                        <Product key={product._id} product={product}></Product>
                    ))
                }
            </div>
        </div>
    )
}