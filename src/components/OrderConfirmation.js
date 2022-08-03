import React from 'react';

function OrderConfirmation({ userInfo }) {
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
                          <span>12 Jan,2018</span>
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
                    <tr>
                      <td width='20%'>
                        <img src='https://i.imgur.com/u11K1qd.jpg' width='90' />
                      </td>

                      <td width='60%'>
                        <span class='font-weight-bold'>Men's Sports cap</span>
                        <div class='product-qty'>
                          <span class='d-block'>Quantity:1</span>
                          <span>Color:Dark</span>
                        </div>
                      </td>
                      <td width='20%'>
                        <div class='text-right'>
                          <span class='font-weight-bold'>$67.50</span>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td width='20%'>
                        <img src='https://i.imgur.com/SmBOua9.jpg' width='70' />
                      </td>

                      <td width='60%'>
                        <span class='font-weight-bold'>
                          Men's Collar T-shirt
                        </span>
                        <div class='product-qty'>
                          <span class='d-block'>Quantity:1</span>
                          <span>Color:Orange</span>
                        </div>
                      </td>
                      <td width='20%'>
                        <div class='text-right'>
                          <span class='font-weight-bold'>$77.50</span>
                        </div>
                      </td>
                    </tr>
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
                            <span>$168.50</span>
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
                            <span>$22</span>
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
                            <span>$7.65</span>
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
                            <span class='text-success'>$168.50</span>
                          </div>
                        </td>
                      </tr>

                      <tr class='border-top border-bottom'>
                        <td>
                          <div class='text-left'>
                            <span class='font-weight-bold'>Subtotal</span>
                          </div>
                        </td>
                        <td>
                          <div class='text-right'>
                            <span class='font-weight-bold'>$238.50</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
