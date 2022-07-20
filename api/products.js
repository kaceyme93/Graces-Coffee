const productsRouter = require('express').Router();
const { Products } = require('../db/models');

//GET /api/products will send back a list of all products in the database
productsRouter.get('/', async (req, res, next) => {
  try {
    const allProducts = await Products.getAllProducts();

    if (allProducts) res.send(allProducts);
  } catch (error) {
    next(error);
  }
});

//GET api/products/:productId will look up a product by Id and send it back
productsRouter.get('/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Products.getProductById(productId);

    if (product) res.send(product);
  } catch (error) {
    next(error);
  }
});

module.exports = productsRouter;
