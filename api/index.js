const apiRouter = require('express').Router();
require('dotenv').config();
const {JWT_SECRET} = process.env
const jwt = require('jsonwebtoken');
const {getUserById} = require('../db/models/user');



apiRouter.get('/', (req, res, next) => {
  res.send({
    message: 'API is under construction!',
  });
});

apiRouter.use(async (req, res, next) => {
  const prefix = 'Bearer ';
  const auth = req.header('Authorization');
  
  if (!auth) {
      next();
  } else if (auth.startsWith(prefix)) {
      const token = auth.slice(prefix.length);
      
    try {
      const { id } = jwt.verify(token, JWT_SECRET);

      if (id) {
        const user = await getUserById(id);
        req.user = user
        next();
      }
    } catch ({ name, message }) {
      next({ name, message });
    }
  } else {
    next({
      name: 'AuthorizationHeaderError',
      message: `Authorization token must start with ${ prefix }`
    });
  }
});


apiRouter.get('/health', (req, res, next) => {
  try {
    res.send({
      healthy: true,
    });
  } catch (error) {
    next(error);
  }
});


// place your routers here
const productsRouter = require('./products');
const usersRouter = require('./users');
const ordersRouter = require('./orders');
const orderProductsRouter = require('./orderProducts');

apiRouter.use('/products', productsRouter);
apiRouter.use('/users', usersRouter);
apiRouter.use('/orders', ordersRouter);
apiRouter.use('/orderProducts', orderProductsRouter);



module.exports = apiRouter;
