import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getSingleOrder } from '../axios-services';

function SingleOrder({ id }) {
    const [order, setOrder] = useState([]);
    const { orderId } = useParams()
    // const history = useHistory

    useEffect(() => {
        const fetchSingleOrder = async () => {
            const result = await getSingleOrder(id || orderId)
            setOrder(result)
        };
        fetchSingleOrder
    }, [id, orderId])

    return (
        <div className='single-order'>
            <p>Order Summary</p>
            <p>Ordered on: {order.datePlaced}</p>
            <p>Order number: {order.id}</p>
            <p>Order status: {order.status}</p>
        </div>
    )
}

export default SingleOrder;
