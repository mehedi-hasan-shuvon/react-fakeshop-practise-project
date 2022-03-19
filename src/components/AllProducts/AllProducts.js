import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './AllProducts.css'
const AllProducts = ({ setCartCount }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

    return (
        <div>
            <h1>All products</h1>
            <div className="row container mx-auto">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        setCartCount={setCartCount}
                    ></Product>)
                }
            </div>


        </div>
    );
};

export default AllProducts;