import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../axios-services';
import Button from 'react-bootstrap/Button';
import '../style/SingleProduct.css';

function SingleProduct({ cart, setCart }) {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const { productId } = useParams();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const result = await getSingleProduct(productId);
      setProduct(result);
    };
    fetchSingleProduct();
  }, [productId]);

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleMinusQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    const cartCopy = [...cart];

    const duplicateProduct = cartCopy.find(
      (product) => product.id === productId
    );

    if (duplicateProduct) {
      duplicateProduct.quantity += product.quantity;
    } else {
      cartCopy.push(product);
    }

    setCart(cartCopy);
    const newCart = JSON.stringify([...cart, product]);
    localStorage.setItem('cart', newCart);
    let cartTest = JSON.parse(localStorage.getItem('cart'));
    console.log(cartTest);
  };

  return (
    <div className='single-product'>
      <img src={product.imageURL} alt={product.name}></img>
      <div className='product-details'>
        <h2 className='single-product-header'>{product.name}</h2>
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

        <div className='single-product-quantity-group'>
          <p className='single-product-quantity-button'>
            <Button
              variant='outline-dark'
              size='sm'
              onClick={() => {
                handleMinusQuantity();
              }}
            >
              -
            </Button>
            {'  '}
            Quantity {'  '}
            <Button
              variant='outline-dark'
              size='sm'
              onClick={() => {
                handleAddQuantity();
              }}
            >
              +
            </Button>
          </p>
          <p>Total: {quantity}</p>
        </div>

        <Button
          variant='success'
          type='submit'
          className='single-product-add-to-cart'
          onClick={() => {
            handleAddToCart();
          }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default SingleProduct;
