import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllProducts } from '../axios-services';
import { SingleProduct } from './index';
import '../style/AllProducts.css';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const history = useHistory();

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
              history.push(`/products/${product.id}`);
            }}
          >
            <SingleProduct id={product.id} />
          </div>
        );
      })}
    </div>
  );
}

export default AllProducts;
