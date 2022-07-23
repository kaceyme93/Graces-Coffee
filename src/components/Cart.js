import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCart } from '../axios-services';

function GetAndDisplayCart() {
    const [cart, setCart] = useState({})
    //I want to use userId to pass to some getCartTypeFunction but doesn't seem necessary? 
    const {userId} = useParams()

    useEffect(() => {
        const fetchCart = async () => {
            //How does this
            const result = await getCart()
            setCart(result)
        }
        fetchCart()
    }, [cart])

    //Things do display: name, image, price, quantity
    return (
        <div className='cart'>
            <h2> Your Cart</h2>
            {cartItemList.map((item) => {
                return (
                    <div className="cart-items">
                        {/* Map through array of cart products */}
                            <img src={item.imageUrl}></img>
                            <div>{item.name}</div>
                            <p className='single-product-quantity-button'>
                                {/* Buttons need onclick to augment/diminish item.quantity */}
                                <Button variant='outline-dark' size='sm'>
                                 -
                                </Button>
                                {'  '}
                                Quantity {'  '}
                                <Button variant='outline-dark' size='sm'>
                                 +
                                </Button>
                                <div>Total: {item.quantity}</div>
                            </p>
                            <div> {item.price}</div>
                            <div>Image of trashcan that can be clicked? Delete button?</div>
                    </div>
                    )
                })}
                   </div>
    )
}   

export default GetAndDisplayCart