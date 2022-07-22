const ordersRouter = require('express').Router();
const { Orders } = require('../db/models');
const { requireAdmin, requireLogin } = require('./utils');

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
  try {
    const order = await Orders.getCartByUser();

    if (order) res.send(order);
  } catch (error) {
    next(error);
  }
});

ordersRouter.post('/orders', requireLogin, async (req, res, next) => {
  try {
    const { id } = req.user;
    const status = 'created';
    const order = { status, id };
    const newOrder = await Orders.createOrder(order);

    res.send(newOrder);
  } catch (error) {
    next(error);
  }
});

ordersRouter.post(
  '/users/:userId/orders',
  requireLogin,
  async (req, res, next) => {
    try {
      const id = req.user.id;
      const userId = req.params.userId;
      const user = { id: req.user.id };

      if (id === userId) {
        const orders = await Orders.getOrdersByUser(user);
        res.send(orders);
      }
    } catch (error) {
      next(error);
    }
  }
);

module.exports = ordersRouter;