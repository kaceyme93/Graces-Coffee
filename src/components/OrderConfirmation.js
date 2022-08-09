import React from 'react';
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function OrderConfirmation({ userInfo }) {
  const localStorageSubTotal = localStorage.getItem('subTotal');
  const localStorageSalesTax = localStorage.getItem('salesTax');
  const localStorageShippingInfo = localStorage.getItem('shipping');
  const productsInCart = JSON.parse(localStorage.getItem('cart'))
  const total = Number(localStorageSalesTax)+ Number(localStorageSubTotal)
  const history = useHistory();
  let today = new Date().toLocaleDateString()
  console.log("shipping info", localStorageShippingInfo)
  return (
    <div class='container mt-5 mb-5'>
      <div class='row d-flex justify-content-center'>
        <div class='col-md-8'>
          <div class='card'>
            <div class='invoice p-5'>
              <h5>Your order Confirmed!</h5>
              <span class='font-weight-bold d-block mt-4'>
                Hello, {userInfo.name}
              </span>
              <span>
                You order has been confirmed and will be shipped in next two
                days!
              </span>
              <div class='payment border-top mt-3 mb-3 border-bottom table-responsive'>
                <table class='table table-borderless'>
                  <tbody>
                    <tr>
                      <td>
                        <div class='py-2'>
                          <span class='d-block text-muted'>Order Date</span>
                          <span>{today}</span>
                        </div>
                      </td>

                      <td>
                        <div class='py-2'>
                          <span class='d-block text-muted'>Order No</span>
                          <span>MT12332345</span>
                        </div>
                      </td>

                      <td>
                        <div class='py-2'>
                          <span class='d-block text-muted'>Payment</span>
                          <span>
                            <img
                              src='https://img.icons8.com/color/48/000000/mastercard.png'
                              width='20'
                            />
                          </span>
                        </div>
                      </td>

                      <td>
                        <div class='py-2'>
                          <span class='d-block text-muted'>
                            Shiping Address
                          </span>
                          <span>414 Advert Avenue, NY,USA</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class='product border-bottom table-responsive'>
                <table class='table table-borderless'>
                  <tbody>
                  {productsInCart.map((prod) =>{
                    return(
                    <tr>
                      <td width='20%'>
                        <img src={prod.imageURL} width='90' />
                      </td>

                      <td width='60%'>
                        <span class='font-weight-bold'>{prod.name}</span>
                        <div class='product-qty'>
                          <span class='d-block'>Quantity:{prod.quantity}</span>
                          <span>Size:{prod.size}</span>
                        </div>
                      </td>
                      <td width='20%'>
                        <div class='text-right'>
                          <span class='font-weight-bold'>${Number(prod.price) * prod.quantity}</span>
                        </div>
                      </td>
                    </tr>)
                    })}
                  </tbody>
                </table>
              </div>

              <div class='row d-flex justify-content-end'>
                <div class='col-md-5'>
                  <table class='table table-borderless'>
                    <tbody class='totals'>
                      <tr>
                        <td>
                          <div class='text-left'>
                            <span class='text-muted'>Subtotal</span>
                          </div>
                        </td>
                        <td>
                          <div class='text-right'>
                            <span>${localStorageSubTotal}</span>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class='text-left'>
                            <span class='text-muted'>Shipping Fee</span>
                          </div>
                        </td>
                        <td>
                          <div class='text-right'>
                            <span>Free</span>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class='text-left'>
                            <span class='text-muted'>Tax Fee</span>
                          </div>
                        </td>
                        <td>
                          <div class='text-right'>
                            <span>${localStorageSalesTax}</span>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class='text-left'>
                            <span class='text-muted'>Discount</span>
                          </div>
                        </td>
                        <td>
                          <div class='text-right'>
                            <span class='text-success'>$0.00</span>
                          </div>
                        </td>
                      </tr>

                      <tr class='border-top border-bottom'>
                        <td>
                          <div class='text-left'>
                            <span class='font-weight-bold'>Total</span>
                          </div>
                        </td>
                        <td>
                          <div class='text-right'>
                            <span class='font-weight-bold'>{total}</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p>
                We will be sending shipping confirmation email when the item
                shipped successfully!
              </p>
              <p class='font-weight-bold mb-0'>Thanks for shopping with us!</p>
              <Button
          variant='secondary'
          type='submit'
          className='front-page-button'
          onClick={() => {
            localStorage.removeItem('subTotal')
            localStorage.removeItem('salesTax')
            localStorage.removeItem('shipping')
            localStorage.removeItem('cart')
            history.push('./products');
          }}
        >
          Return to Products
        </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
