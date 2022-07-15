import React, { useEffect, useState } from 'react';
import { getSingleProduct } from '../axios-services';
import '../style/SingleProduct.css';

function SingleProduct({ productId }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const result = await getSingleProduct(productId);
      setProduct(result);
    };
    fetchSingleProduct();
  }, []);

  return (
    <div className='single-product'>
      <h1>Single Product</h1>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      <p>{product.imageURL}</p>
      <p>In Stock: {product.inStock}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default SingleProduct;
