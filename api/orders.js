const ordersRouter = require('express').Router();
const { Orders } = require('../db/models');
const{ OrderProducts } = require('../db/models')
const { requireAdmin, requireLogin } = require('./utils');
// requireAdmin
//GET /api/orders will send back a list of all orders in the database
ordersRouter.get('/', requireAdmin, async (req, res, next) => {
  try {
    const allOrders = await Orders.getAllOrders();

    if (allOrders) res.send(allOrders);
  } catch (error) {
    next(error);
  }
});

ordersRouter.get('/cart', requireLogin, async (req, res, next) => {
  const userId = req.user

  if(userId){
  try {
    const order = await Orders.getCartByUser(userId);
    if (order) res.send(order);
  } catch (error) {
    next(error);
  }}
});

ordersRouter.get('/:orderId', async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const order = await Orders.getOrderById(orderId);
    if (order) res.send(order);
  } catch (error) {
    next(error);
  }
});

ordersRouter.post('/', requireLogin, async (req, res, next) => {
  try {
    const userId  = req.user.id;
    const status = 'created';
    const order = { status, userId };
    const newOrder = await Orders.createOrder(order);

    res.send(newOrder);
  } catch (error) {
    next(error);
  }
});


ordersRouter.post(
'/:orderId/products',
async (req, res, next) => {
  /*Add a single product to an order (using order_products). 
  Prevent duplication on ("orderId", "productId") pair. If product already exists on order, add additional quantity and price.*/
  try {
    const { orderId } = req.params;
    const { productId, price, quantity } = req.body;
    const addedProduct = await OrderProducts.addProductToOrder({
      orderId,
      productId,
      price,
      quantity,
    });
    if (addedProduct) res.send(addedProduct);
  } catch (error) {
    next(error);
  }
}
);

ordersRouter.patch('/:orderId', async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const { id, username } = req.user;
    const { status, userId } = req.body;

    const newOrder = { id: orderId, status: status, userId: userId };
    const originalOrder = await Orders.getOrderById(orderId);

    if (originalOrder.userId === id) {
      const order = await Orders.updateRoutine(newOrder);

      res.send(order);
    } else {
      res.status(403).send({
        message: `User ${username} is not allowed to update this order`,
        name: 'UnauthorizedUpdateError',
        error: 'User not allowed to update order',
      });
    }
  } catch (error) {
    next(error);
  }
});

ordersRouter.delete('/:orderId', requireLogin, async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const { id, username } = req.user;

    const order = await Orders.getOrderById(orderId);

    if (order.userId === id) {
      const deletedOrder = await Orders.cancelOrder(orderId);

      res.send(deletedOrder);
    } else {
      res.status(403).send({
        message: `User ${username} is not allowed to delete this order`,
        name: 'UnauthorizedDeleteError',
        error: 'User not allowed to delete order',
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = ordersRouter;
