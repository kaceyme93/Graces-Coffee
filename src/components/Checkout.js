import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useHistory } from 'react-router-dom';
import { cancelOrder, completeOrder } from '../axios-services';
import Button from 'react-bootstrap/Button';
import Stripe from './Stripe';
import '../style/Checkout.css';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  'pk_test_51LS1IvEfEmNzXkA2T1NhGj87u2NS6AP3TV7QHuzMiueml7qXXiyx6PLLMtbLpBobgLLQ5Yk1cph2TocODsr1Plg200YiJhE7lY'
);

export default function Checkout({ userInfo }) {
  const [clientSecret, setClientSecret] = useState('');
  const [shipping, setShipping] = useState('');
  const shippingOptions = ['USPS', 'UPS', 'Fedex'];
  const history = useHistory();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  // need to add orderId to cancel order
  const handleCancelOrder = async () => {
    const confirmCancelOrder = window.confirm('Cancel Order?');
    if (confirmCancelOrder) {
      await cancelOrder();
    }
    alert('Order successfully cancelled');
    history.push(`/`);
  };

  // need to add orderId to complete order
  const handleCompleteOrder = async () => {
    await completeOrder();
    alert('Thanks for you order!');
  };

  return (
    <div className='checkout-page'>
      <h1>Checkout</h1>
      <div className='checkout-user-info'>
        <h3>Your Info</h3>
        <p>{userInfo.email}</p>
      </div>

      <div className='checkout-shipping-address'>
        <h3>Shipping Address</h3>
        <div className='row mt-2'>
          <div className='col-md-6'>
            <label className='labels'>First name</label>
            <input
              type='text'
              className='form-control'
              placeholder='first name'
              value=''
            />
          </div>
          <div className='col-md-6'>
            <label className='labels'>Last name</label>
            <input
              type='text'
              className='form-control'
              value=''
              placeholder='Last name'
            />
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-md-12'>
            <label className='labels'>Mobile Number</label>
            <input
              type='text'
              className='form-control'
              placeholder='enter phone number'
              value=''
            />
          </div>
          <div className='col-md-12'>
            <label className='labels'>Address Line 1</label>
            <input
              type='text'
              className='form-control'
              placeholder='enter address line 1'
              value=''
            />
          </div>
          <div className='col-md-12'>
            <label className='labels'>Address Line 2</label>
            <input
              type='text'
              className='form-control'
              placeholder='enter address line 2'
              value=''
            />
          </div>
          <div className='col-md-12'>
            <label className='labels'>State</label>
            <input
              type='text'
              className='form-control'
              placeholder='enter state'
              value=''
            />
          </div>
          <div className='col-md-12'>
            <label className='labels'>Zip code</label>
            <input
              type='text'
              className='form-control'
              placeholder='enter zip code'
              value=''
            />
          </div>
        </div>
      </div>

      <fieldset id='shipping-dropdown'>
        <legend>Shipping Options</legend>
        <select
          name='shipping'
          id='select-shipping'
          value={shipping}
          onChange={(event) => setShipping(event.target.value)}
        >
          <option value='select'>Select</option>
          {shippingOptions.map((shipping, index) => {
            return (
              <option key={index} value={shipping}>
                {shipping}
              </option>
            );
          })}
        </select>
      </fieldset>

      <div className='checkout-button-group'>
        <Button
          variant='danger'
          className='checkout-cancel-button'
          onClick={() => {
            handleCancelOrder();
          }}
        >
          Cancel Order
        </Button>
        <Button
          variant='primary'
          onClick={() => {
            handleCompleteOrder();
          }}
        >
          Complete Order
        </Button>
      </div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <Stripe />
        </Elements>
      )}
    </div>
  );
}
