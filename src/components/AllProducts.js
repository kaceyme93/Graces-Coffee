import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../axios-services';
import { SingleProduct } from './index';
import '../style/AllProducts.css';

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const result = await getAllProducts();
      setProducts(result);
    };
    fetchAllProducts();
  }, []);

  return (
    <div className='all-products'>
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className='products-list'
            onClick={() => {
              console.log(product.id);
            }}
          >
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>{product.imageURL}</p>
            <p>In Stock: {product.inStock}</p>
            <p>Category: {product.category}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AllProducts;
