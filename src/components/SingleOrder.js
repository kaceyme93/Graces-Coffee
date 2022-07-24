import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleOrder, getSingleProduct } from '../axios-services';
import Button from 'react-bootstrap/Button'

function SingleOrder({ id }) {
    const [order, setOrder] = useState([]);
    const { orderId } = useParams()
    const orderProductIds = order.productId
    const products = await Promise.all(
        orderProductIds.map((orderProductId) => getSingleProduct(orderProductId)))

    useEffect(() => {
        const fetchSingleOrder = async () => {
            const result = await getSingleOrder(orderId || id)
            setOrder(result)
        };
        fetchSingleOrder()
    }, [orderId, id])

    // Should the order info also include pictures of the products in order?
    return (
        <div className='order-details'>
            <h2> Order Summary</h2>
            {products.map((product) => {
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

export default SingleOrder;
