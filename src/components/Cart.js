import React, { useEffect, useState } from 'react';
import { getUserCart } from '../axios-services';
import { SingleOrder } from './index';

function Cart(props) {
  const [cart, setCart] = useState({});
  const orderId = cart.orderId;
  const {token} = props

  useEffect(() => {
    const fetchCart = async () => {
      const result = await getUserCart(token);
      setCart(result);
    };
    fetchCart();
  }, [cart]);

  return <SingleOrder id={orderId} />;
}

export default Cart;
