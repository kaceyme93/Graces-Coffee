const ordersRouter = require('express').Router();
const { Orders } = require('../db/models');
const { requireAdmin } = require('./utils');

//GET /api/orders will send back a list of all orders in the database
ordersRouter.get('/', requireAdmin, async (req, res, next) => {
  try {
    const allOrders = await Orders.getAllOrders();

    if (allOrders) res.send(allOrders);
  } catch (error) {
    next(error);
  }
});

module.exports = ordersRouter;
