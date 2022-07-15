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
      <h1>AllProducts</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <SingleProduct />
          </div>
        );
      })}
    </div>
  );
}

export default AllProducts;
