import React from 'react';
import Button from 'react-bootstrap/Button';
import '../style/Checkout.css';

function Checkout({ userInfo }) {
  return (
    <div className='checkout-page'>
      <h1>Checkout</h1>
      <p>{userInfo.email}</p>

      <div className='checkout-button-group'>
        <Button variant='danger' className='checkout-cancel-button'>
          Cancel Order
        </Button>
        <Button variant='success'>Complete Order</Button>
      </div>
    </div>
  );
}

export default Checkout;
