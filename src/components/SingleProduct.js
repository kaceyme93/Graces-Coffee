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
      <h2>{product.name}</h2>
    </div>
  );
}

export default SingleProduct;
