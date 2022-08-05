// This is the Web Server
const express = require('express');
const server = express();
// enable cross-origin resource sharing to proxy api requests
// from localhost:3000 to localhost:4000 in local dev env
const cors = require('cors');
server.use(cors());

// create logs for everything
const morgan = require('morgan');
server.use(morgan('dev'));

const bodyParser = require('body-parser');
server.use(bodyParser.json())

// handle application/json requests
server.use(express.json());

// stripe integration
const stripe = require('stripe')(
  'sk_test_51LS1IvEfEmNzXkA2FVXX6ax14Oy2SF5KOmybmdY28cP8ALbbbuMhljIhNbgtXorIsulryAY1QCfQJrF1BtwbGi7P00QVYIHD9v'
);

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

server.post('/create-payment-intent', async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

// here's our static files
const path = require('path');
server.use(express.static(path.join(__dirname, 'build')));

// here's our API
server.use('/api', require('./api'));

// by default serve up the react app if we don't recognize the route
server.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// bring in the DB connection
const { client } = require('./db');

// connect to the server
const PORT = process.env.PORT || 4000;

// define a server handle to close open tcp connection after unit tests have run
const handle = server.listen(PORT, async () => {
  console.log(`Server is running on ${PORT}!`);

  try {
    await client.connect();
    console.log('Database is open for business!');
  } catch (error) {
    console.error('Database is closed for repairs!\n', error);
  }
});

// export server and handle for routes/*.test.js
module.exports = { server, handle };
