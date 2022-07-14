import React, { useEffect, useState } from 'react';
import { getSingleProduct } from '../axios-services';
import '../style/SingleProduct.css';

function SingleProduct() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const result = await getSingleProduct();
      setProduct(result);
    };
    fetchSingleProduct();
  }, []);

  return (
    <div className='single-product'>
      <h1>Single Product</h1>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.imageURL}</p>
      <p>{product.inStock}</p>
      <p>{product.category}</p>
    </div>
  );
}

export default SingleProduct;
