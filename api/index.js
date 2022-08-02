const apiRouter = require('express').Router();


apiRouter.get('/', (req, res, next) => {
  res.send({
    message: 'API is under construction!',
  });
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

apiRouter.use('/products', productsRouter);
apiRouter.use('/users', usersRouter);
apiRouter.use('/orders', ordersRouter);

module.exports = apiRouter;
