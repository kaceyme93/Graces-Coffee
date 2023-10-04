import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import emptyCartScreen from '../images/emptyCartScreenImage.jpg'
import '../style/Cart.css'

function GetAndDisplayCart(props) {
    const [trigger, setTrigger] = useState(false)
    const {token, subTotal, setSubTotal, cart, setCart} = props
    const salesTax = parseFloat((subTotal*.0625).toFixed(2))
    const history = useHistory()

    const setQuantity = (product, amount) => {
        if ((product.quantity ===1) && (amount === -1)){
            deleteProductFromCart(product)
            setCart(cartProd => cartProd.map(prod => prod.id===product.id ?({
                ...prod,
               quantity: prod.quantity + amount,
           }): prod))
        } else {
            setCart(cartProd => cartProd.map(prod => prod.id===product.id ?({
                 ...prod,
                quantity: prod.quantity + amount,
            }): prod))
        }

        setTrigger(!trigger)
    }

    const updateLocalStorage = (product, amount) => {
        const cartFromLocal = JSON.parse(localStorage.getItem('cart'))
        if(cartFromLocal) {
            cartFromLocal.forEach((localProduct) => {
            if(localProduct.id===product.id){
                localProduct.quantity += amount
            }
            setCart(cartFromLocal)
            const newCart = JSON.stringify([...cartFromLocal])
                localStorage.setItem('cart', newCart)
            })
        }
    }

    const checkOutHandler = () => {
        history.push("/cart/checkout")
    }

    const continueShoppingHandler = () => {
        history.push("/products")
    }
    const deleteProductFromCart = (product) => {
        const productsInCart = JSON.parse(localStorage.getItem('cart'))
        const notDeletedProducts = productsInCart.filter(productInCart => productInCart.id!==product.id)
        const newCart = JSON.stringify([...notDeletedProducts])
        localStorage.setItem('cart', newCart)
        
    }
    
    useEffect(() => {
        let isMounted = true

        const fetchCart = async () => {
            const cartFromLocal =JSON.parse(localStorage.getItem('cart'))
            if (cartFromLocal) {
                if(isMounted) {
                    setCart(cartFromLocal)
                    var sum = 0
                    cartFromLocal.forEach((product) => {
                        let price = parseFloat(product.price)
                        sum += price * product.quantity
                    })
                    setSubTotal(sum)
                }
            }
            if(cartFromLocal.length === 0) {
                const cartQuantity = document.getElementById("cart-quantity-id")
                cartQuantity.className = "cart-quantity"
            }
        };
        fetchCart()
        return() => {
            isMounted= false
        }
    }, [token, trigger])
    
    if (cart.length===0) {
        return (
            <div className='main-cart-container'>
                <h1 className= 'empty-cart-message' >
                    Your cart is currently empty
                </h1>  
                <img className='empty-cart-logo' src={emptyCartScreen}></img>
                <div className='continue-button-container'>
                    <Button className='continue-button' onClick={() => continueShoppingHandler()} >Continue Shopping</Button>
                </div>
                <div>
                <a className='image-credit' href="https://www.vecteezy.com/free-vector/coffee-icon">Coffee Icon Vectors by Vecteezy</a>

                </div>
            </div>
        )
    }
    return (
        <Container>
            <h2> My Cart</h2>
            
            <Row>
                <Col>
                {/* {cartProds.map((product) => { */}
                {cart.map((product) => {
                    return (
                    <Card key={product.id} className="product-details">
                        <Row>
                            <Col md="auto">
                                <Card.Img className= 'd-inline-flex p-2' src={product.imageURL} style={{width: '7rem'}} />
                            </Col>
                            <Col>
                                <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Row>
                                    <Col>
                                        <Card.Text>Size: {product.size}</Card.Text>
                                    </Col>
                                    <Col>
                                        <Card.Text>Price: ${(product.price)}</Card.Text>
                                    </Col>
                                    <Col>
                                        <Button size='sm' onClick={(e) => {e.preventDefault(); setQuantity(product, -1); updateLocalStorage(product, -1)}} variant='outline-dark'>-</Button>
                                        <Card.Text style={{display: "inline", marginLeft:"10px", marginRight:"10px"}}>Quantity: {product.quantity}</Card.Text>
                                        <Button size='sm' onClick={(e) => {e.preventDefault(); setQuantity(product, 1); updateLocalStorage(product, 1)}} variant='outline-dark'>+</Button>
                                    </Col>
                                </Row>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card> 
                    )
                })}
            </Col>
                <Col>
                    <Card>
                        <Card.Title  className="summary-header"> Summary of Charges</Card.Title>
                        <Row>
                            <Col>
                                <Card.Text className="summary-item"> Subtotal</Card.Text>
                            </Col>
                            <Col>
                                <Card.Text className="summary-item"> ${(subTotal).toFixed(2)}</Card.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card.Text className="summary-item">Shipping</Card.Text>
                            </Col>
                            <Col>
                                <Card.Text className="summary-item">FREE</Card.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card.Text className="summary-item">Est. Tax</Card.Text>
                            </Col>
                            <Col>
                                {/* Sales Tax of Il */}
                                <Card.Text className="summary-item">${salesTax}</Card.Text>
                            </Col>
                        </Row>
                        <Row>
                            <div></div>
                        </Row>
                        <Row>
                            <Col>
                                <Card.Text className="summary-item"> TOTAL</Card.Text>
                            </Col>
                            <Col>
                                <Card.Text className="summary-item">${(subTotal + salesTax)}</Card.Text>
                            </Col>
                        </Row>
                        <Row style={{justifyContent: 'center'}}>
                            <Button 
                                variant="dark" 
                                style={{width: "200px", 
                                marginBottom: '10px'}}
                                onClick={() => checkOutHandler()}
                                >CHECKOUT</Button>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
} 
   

export default GetAndDisplayCart;
