const orderProductsRouter = require('express').Router();
const { orderProducts } = require('../db/models');
const {
    addProductToOrder,
    destroyOrderProduct

} = require ('../db/models/orderProducts')

orderProductsRouter.post('/orders/:orderId/products', async (req, res, next) => {
    /*Add a single product to an order (using order_products). 
    Prevent duplication on ("orderId", "productId") pair. If product already exists on order, increment quantity and update price.*/ 
    try {
      const {orderId} = req.params
      const { productId, price, quantity } = req.body
      const addedProduct = await addProductToOrder({orderId, productId, price, quantity });
      if (addedProduct) res.send(addedProduct);
    } catch (error) {
      next(error);
    }
  });

  orderProductsRouter.patch('/order_products/:orderProductId', async (req, res, next) => {
    // Update the quantity or price on the order product
    try {
      const { orderProductId } = req.params
      const { price, quantity } = req.body
      const updatedProduct = await updateOrderProduct({orderProductId, price, quantity});
  //check if the item exists in the cart, if it is then insert this stuff, if not update the value to get one.
      if (updatedProduct) res.send(addedProduct);
    } catch (error) {
      next(error);
    }
  });
  orderProductsRouter.delete('/order_products/:orderProductId', async (req, res, next) => {
    //Remove a product from a order, use hard delete
    try {
      const { orderProductId } = req.params;
      const deletedProduct = await destroyOrderProduct(orderProductId);
  
      if (deletedProduct) res.send(deletedProduct);
    } catch (error) {
      next(error);
    }
  });

  module.exports = orderProductsRouter