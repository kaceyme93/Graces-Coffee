import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllProducts } from '../axios-services';
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
          <div key={product.id} className='products-list'>
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
            <p>Price: ${product.price}</p>
            <p>{product.inStock === true ? 'In Stock' : 'Out of Stock'}</p>{' '}
          </div>
        );
      })}
    </div>
  );
}

export default AllProducts;
