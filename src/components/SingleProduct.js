import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../axios-services';
import '../style/SingleProduct.css';

function SingleProduct({ id }) {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const result = await getSingleProduct(id || productId);
      setProduct(result);
    };
    fetchSingleProduct();
  }, [id, productId]);

  return (
    <div className='single-product'>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      <p>{product.imageURL}</p>
      <p>In Stock: {product.inStock === true ? 'Yes' : 'No'}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default SingleProduct;
