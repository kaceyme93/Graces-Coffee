import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { cancelOrder, completeOrder } from '../axios-services';
import Button from 'react-bootstrap/Button';
import '../style/Checkout.css';

function Checkout({ userInfo }) {
  const [shipping, setShipping] = useState('');
  const shippingOptions = ['USPS', 'UPS', 'Fedex'];
  const history = useHistory();

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
    </div>
  );
}

export default Checkout;
