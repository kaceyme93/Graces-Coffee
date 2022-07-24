import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleOrder } from '../axios-services';
import '../style/SingleOrder.css';

function SingleOrder() {
  const [order, setOrder] = useState([]);
  const { orderId } = useParams();

  useEffect(() => {
    const fetchSingleOrder = async () => {
      const result = await getSingleOrder(orderId);
      setOrder(result);
    };
    fetchSingleOrder();
  }, [orderId]);

  return (
    <>
      <h2>Single Order</h2>
      <p>{order}</p>
    </>
  );
}

export default SingleOrder;
