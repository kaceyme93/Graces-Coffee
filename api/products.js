const productsRouter = require('express').Router();

const {getProductById, getAllProducts, createProduct} = require('../db/products') //functions not defined yet

//GET /api/products will send back a list of all products in the database
productsRouter.get('/', async (req, res, next)=>{
    try {
        const allProducts = await getAllProducts();
        if(allProducts){
            res.send(allProducts);
        }
    } catch (error) {
        next(error)
    }
})

//GET api/products/:productId will look up a product by Id and send it back

productsRouter.get('/:productId', async( req, res, next)=>{
    try {
        let productId = {};
        productId.id = req.params.productId;
        const product = await getProductById(productId);
        if(product){
            res.send(product);
        }
    } catch (error) {
        next(error)
    }
})

module.exports = productsRouter;