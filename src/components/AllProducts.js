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
          <div key={product.id} className='products-list'>
            <SingleProduct id={product.id} />
          </div>
        );
      })}
    </div>
  );
}

export default AllProducts;
