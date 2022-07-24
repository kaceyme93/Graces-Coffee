import React, { useEffect, useState } from 'react';
import { getUserCart } from '../axios-services';
import {SingleOrder} from "./SingleOrder"

function GetAndDisplayCart() {
    const [cart, setCart] = useState({})
    const orderId = cart.orderId

    useEffect(() => {
        const fetchCart = async () => {
            const result = await getUserCart()
            setCart(result)
        }
        fetchCart()
    }, [cart])

    return (
        <SingleOrder id={orderId}/>
    )
}   

export default GetAndDisplayCart