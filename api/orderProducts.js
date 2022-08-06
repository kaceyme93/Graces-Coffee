const orderProductsRouter = require('express').Router();
const {
  addProductToOrder,
  destroyOrderProduct,
  updateOrderProduct
} = require('../db/models/orderProducts');

orderProductsRouter.patch(
  '/:orderProductId',
  async (req, res, next) => {
    // Update the quantity or price on the order product
    try {
      const { orderProductId } = req.params;
      //where are we getting price and quantity from?
      const { quantity } = req.body;
      const updatedProduct = await updateOrderProduct({
        id : orderProductId,
        quantity,
      });
      //check if the item exists in the cart, if it is then insert this stuff, if not update the value to get one.
      if (updatedProduct) res.send(updatedProduct);
    } catch (error) {
      next(error);
    }
  }
);
orderProductsRouter.delete(
  '/:orderProductId',
  async (req, res, next) => {
    console.log("API HIT")
    //Remove a product from a order, use hard delete
    try {
      const { orderProductId } = req.params;
      const deletedProduct = await destroyOrderProduct(orderProductId);

      if (deletedProduct) res.send(deletedProduct);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = orderProductsRouter;
