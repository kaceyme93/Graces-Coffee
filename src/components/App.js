import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../style/App.css';
// getAPIHealth is defined in our axios-services directory index.js
// you can think of that directory as a collection of api adapters
// where each adapter fetches specific info from our express server's /api route
import { getAPIHealth } from '../axios-services';
import { SingleProduct, AllProducts, Navbar } from './index';

const App = () => {
  const [APIHealth, setAPIHealth] = useState('');

  useEffect(() => {
    // follow this pattern inside your useEffect calls:
    // first, create an async function that will wrap your axios service adapter
    // invoke the adapter, await the response, and set the data
    const getAPIStatus = async () => {
      const { healthy } = await getAPIHealth();
      setAPIHealth(healthy ? 'api is up! :D' : 'api is down :/');
    };

    // second, after you've defined your getter above
    // invoke it immediately after its declaration, inside the useEffect callback
    getAPIStatus();
  }, []);

  return (
    <div className='app-container'>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path='/products/:productId'
            component={SingleProduct}
          ></Route>

          <Route exact path='/products'>
            <AllProducts />
          </Route>
        </Switch>
      </Router>

      <div className='API-status'>
        <h1>Hello, World!</h1>
        <p>API Status: {APIHealth}</p>
      </div>
    </div>
  );
};

export default App;
