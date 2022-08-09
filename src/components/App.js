import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../style/App.css';
// getAPIHealth is defined in our axios-services directory index.js
// you can think of that directory as a collection of api adapters
// where each adapter fetches specific info from our express server's /api route
import { currentUserInfo, getAPIHealth } from '../axios-services';
import {
  SingleProduct,
  AllProducts,
  Navbar,
  Register,
  Login,
  Profile,
  SingleOrder,
  FrontPage,
  Cart,
  Checkout,
  OrderConfirmation,
} from './index';

const App = () => {
  const [APIHealth, setAPIHealth] = useState('');
  const [token, setToken] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  const localStorageToken = localStorage.getItem('jwt');
  const localStorageCart = localStorage.getItem('localStorageCart');
  useEffect(() => {
    // follow this pattern inside your useEffect calls:
    // first, create an async function that will wrap your axios service adapter
    // invoke the adapter, await the response, and set the data
    const getAPIStatus = async () => {
      const { healthy } = await getAPIHealth();
      setAPIHealth(healthy ? 'api is up! :D' : 'api is down :/');
    };

    currentUserInfo(setUserInfo, token);
    localStorageToken && setToken(localStorageToken);
    // second, after you've defined your getter above
    // invoke it immediately after its declaration, inside the useEffect callback
    getAPIStatus();
  }, [token, localStorageToken]);

  useEffect(() => {
    localStorageCart && setCart(localStorageCart);
  }, [localStorageCart]);

  console.log(APIHealth);

  return (
    <div className='app-container'>
      <Router>
        <Navbar
          token={token}
          setToken={setToken}
          setUserInfo={setUserInfo}
          userInfo={userInfo}
        />
        <Switch>
          <Route exact path='/products/:productId'>
            <SingleProduct cart={cart} setCart={setCart} />
          </Route>

          <Route exact path='/products'>
            <AllProducts />
          </Route>

          <Route exact path='/register'>
            <Register setToken={setToken} />
          </Route>

          <Route exact path='/login'>
            <Login setToken={setToken} />
          </Route>

          <Route exact path='/profile'>
            <Profile userInfo={userInfo} />
          </Route>

          <Route exact path='/orders/cart'>
            <Cart token={token} subTotal={subTotal} setSubTotal={setSubTotal}/>
          </Route>

          <Route exact path='/orders/:orderId'>
            <SingleOrder />
          </Route>

          <Route exact path='/cart'>
            <SingleOrder />
          </Route>

          <Route exact path='/cart/checkout'>
            <Checkout userInfo={userInfo} subTotal={subTotal} />
          </Route>

          <Route exact path='/confirmation'>
            <OrderConfirmation userInfo={userInfo} />
          </Route>

          <Route path='/'>
            <FrontPage />
          </Route>
        </Switch>
      </Router>

      {/* <div className='API-status'>
        <h1>Hello, World!</h1>
        <p>API Status: {APIHealth}</p>
      </div> */}
    </div>
  );
};

export default App;
