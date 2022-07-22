import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../axios-services';
import '../style/SingleProduct.css';

function SingleProduct() {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const result = await getSingleProduct(productId);
      setProduct(result);
    };
    fetchSingleProduct();
  }, [productId]);

  return (
    <div className='single-product'>
      <img src={product.imageURL}></img>
      <div className='product-details'>
        <h2>{product.name}</h2>
        <p>
          ${product.price} - {product.size}
        </p>
        <p className='product-inStock'>
          {product.inStock === true ? 'In Stock' : 'Out of Stock'}
        </p>
        <p>{product.description}</p>
        <p>Origin: {product.origin}</p>
        <p>Roast: {product.roast}</p>
        <p>Category: {product.category}</p>
      </div>
    </div>
  );
}

export default SingleProduct;
