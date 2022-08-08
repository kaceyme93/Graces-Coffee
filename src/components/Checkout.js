import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useHistory } from 'react-router-dom';
import { cancelOrder, completeOrder } from '../axios-services';
import Button from 'react-bootstrap/Button';
import Stripe from './Stripe';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import '../style/Checkout.css';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  'pk_test_51LS1IvEfEmNzXkA2T1NhGj87u2NS6AP3TV7QHuzMiueml7qXXiyx6PLLMtbLpBobgLLQ5Yk1cph2TocODsr1Plg200YiJhE7lY'
);

export default function Checkout(props) {
  const [clientSecret, setClientSecret] = useState('');
  const {userInfo, subTotal} = props
  const salesTax = parseFloat((subTotal*.0625).toFixed(2))
  const total = (subTotal + salesTax).toFixed(2)
  const history = useHistory();
  const states = [
    'AL',
    'AK',
    'AS',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'DC',
    'FM',
    'FL',
    'GA',
    'GU',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MH',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'MP',
    'OH',
    'OK',
    'OR',
    'PW',
    'PA',
    'PR',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VI',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
  ];

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
      <div className='col-md-4 container bg-default'>
        <div className='checkout-info'>
          <h4 className='card-title'>Your Info</h4>
          <p className='card-text'>{userInfo.email}</p>
        </div>

        <h4 className='my-4'>Billing Address</h4>
        <form>
          <div className='form-row'>
            <div className='col-md-6 form-group'>
              <label for='firstname'>First Name</label>
              <input
                type='text'
                className='form-control'
                id='firstname'
                placeholder='First Name'
              />
              <div className='invalid-feedback'>
                Valid first name is required.
              </div>
            </div>
            <div className='col-md-6 form-group'>
              <label for='lastname'>Last Name</label>
              <input
                type='text'
                className='form-control'
                id='lastname'
                placeholder='Last Name'
              />
              <div className='invalid-feedback'>
                Valid last name is required.
              </div>
            </div>
          </div>

          <div className='form-group'>
            <label for='adress'>Address</label>
            <input
              type='text'
              className='form-control'
              id='adress'
              placeholder='1234 Main Street'
              required
            />
            <div className='invalid-feedback'>
              Please enter your shipping address.
            </div>
          </div>

          <div className='form-group'>
            <label for='address2'>
              Address 2<span className='text-muted'>(Optional)</span>
            </label>
            <input
              type='text'
              className='form-control'
              id='adress2'
              placeholder='Apt #'
            />
          </div>

          <div className='col-md-4 form-group'>
            <label for='city'>
              City<span className='text-muted'></span>
            </label>
            <input
              type='text'
              className='form-control'
              id='city'
              placeholder='City'
            />
          </div>

          <div className='col-md-4 form-group'>
            <label for='state'>State</label>
            <select type='text' className='form-control' id='state'>
              <option value>Choose...</option>
              {states.map((state) => {
                return <option>{state}</option>;
              })}
            </select>
            <div className='invalid-feedback'>
              Please provide a valid state.
            </div>
          </div>

          <div className='col-md-4 form-group'>
            <label for='zipcode'>
              Zip Code<span className='text-muted'></span>
            </label>
            <input
              type='number'
              className='form-control'
              id='zipcode'
              placeholder='012345'
            />
            <Button
              variant='danger'
              className='checkout-cancel-button'
              onClick={() => {
                handleCancelOrder();
              }}
            >
              Cancel Order
            </Button>
          </div>
        </form>
      </div>
        <Col md="auto" style={{justifyContent: 'space-around'}}>
          <Card style={{width: '30vw', midWidth: '500px', marginBottom: '10px'}}>
            <Card.Title style={{textAlign: 'center'}}> Summary of Charges</Card.Title>
            <Row className="justify-content-md-center">
                <Col>
                    <Card.Text style= {{marginLeft: '50px'}}> Subtotal</Card.Text>
                </Col>
                <Col>
                    <Card.Text style={{marginLeft: '150px', paddingRight: '20px'}}> ${(subTotal).toFixed(2)}</Card.Text>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card.Text style={{marginLeft: '50px'}}>Shipping</Card.Text>
                </Col>
                <Col>
                    <Card.Text style={{marginLeft: '150px', paddingRight: '20px'}}>FREE</Card.Text>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card.Text style={{marginLeft: '50px'}}>Est. Tax</Card.Text>
                </Col>
                <Col>
                    {/* Sales Tax of Il */}
                    <Card.Text style={{marginLeft: '150px', paddingRight: '20px'}}>${salesTax}</Card.Text>
                </Col>
            </Row>
            <Row style={{marginBottom: '10px'}}>
                <Col>
                    <Card.Text style={{marginLeft: '50px'}}> TOTAL</Card.Text>
                </Col>
                <Col>
                    <Card.Text style={{marginLeft: '150px', paddingRight: '20px'}}>${total}</Card.Text>
                </Col>
            </Row>
          </Card>
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <Stripe />
            </Elements>
          )}
        </Col>
    </div>
  );
}
