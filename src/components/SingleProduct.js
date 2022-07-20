import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../axios-services';
import '../style/SingleProduct.css';

function SingleProduct({ id }) {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const result = await getSingleProduct(id || productId);
      setProduct(result);
    };
    fetchSingleProduct();
  }, [id, productId]);

  return (
    <div className='single-product'>
      {product.imageURL && (
        <img
          src={product.imageURL}
          alt={product.name}
          className='product-image'
          onClick={() => {
            history.push(`/products/${product.id}`);
          }}
        ></img>
      )}
      <p
        className='product-name'
        onClick={() => {
          history.push(`/products/${product.id}`);
        }}
      >
        {product.name}
      </p>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <p>In Stock: {product.inStock === true ? 'Yes' : 'No'}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default SingleProduct;
