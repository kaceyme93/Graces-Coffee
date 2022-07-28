import React, { useEffect, useState } from 'react';
import { getUserCart, getSingleProduct } from '../axios-services';
import Button from 'react-bootstrap/Button'

function GetAndDisplayCart() {
    const [cart, setCart] = useState({})
    const [cartProds, setCartProds] = useState([])
    const cartProductIds = cart.productId

    // const products = async () => {
    //     return Promise.all(cartProductIds.map(cartProductId => getSingleProduct(cartProductId)))
    // }
    const fetchCart = async () => {
        const result = await getUserCart()
        setCart(result)
    }
    const products = async () => {
        const result = Promise.all(cartProductIds.map(cartProductId => getSingleProduct(cartProductId)))
        setCartProds(result)
    }

    useEffect(() => {
        fetchCart();
        products()
    }, [])

    return (
        <div className='order-details'>
            <h2> Order Summary</h2>
            {cartProds.map((product) => {
                return (
                    <div className="order-products">
                        {/* Map through array of cart products */}
                            <img src={product.imageUrl} alt="Coffee"></img>
                            <div>{product.name}</div>
                            <p className='single-product-quantity-button'>
                                {/* Buttons need onclick to augment/diminish product.quantity */}
                                <Button variant='outline-dark' size='sm'>
                                 -
                                </Button>
                                {'  '}
                                Quantity {'  '}
                                <Button variant='outline-dark' size='sm'>
                                 +
                                </Button>
                                <div>Total: {product.quantity}</div>
                            </p>
                            <div> {product.price}</div>
                            <div>Image of trashcan that can be clicked? Delete button?</div>
                    </div>
                    )
                })}
        </div>
    )
}   

export default GetAndDisplayCart