import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleOrder } from '../axios-services';

function SingleOrder({ id }) {
    const [order, setOrder] = useState([]);
    const { orderId } = useParams()

    useEffect(() => {
        const fetchSingleOrder = async () => {
            const result = await getSingleOrder(orderId)
            setOrder(result)
        };
        fetchSingleOrder
    }, [orderId])

    // Should the order info also include pictures of the products in order?
    return (
        <div className='single-order'>
            <h2>Order Summary</h2>
            <p>Ordered on: {order.datePlaced}</p>
            <p>Order number: {order.id}</p>
            <p>Order status: {order.status}</p>
        </div>
    )
}

export default SingleOrder;
