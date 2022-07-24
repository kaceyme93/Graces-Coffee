const client = require('../client');

async function getOrderProductById(id) {
    const {rows: [product]} = await client.query('SELECT * FROM orderProducts WHERE productId=$1',[id])
    return product
}

//  update the order_products price still needs to be handled

async function addProductToOrder({ orderId, productId, price, quantity }) {
    try{const {rows:productExists} = await client.query('SELECT * FROM order_products WHERE "orderId"=$1 AND "productId"=$2',[orderId,productId])
    if(productExists) {//if product exists then we will update the existing entry
        const {rows: product} = await client.query('UPDATE order_products SET price=$1,quantity=quantity + $2 WHERE "orderId"=$3 AND "productId"=$4 RETURNING *',[price,quantity,orderId,productId])
        return product
    }else {//if product does not exist then we will create the order_product and return it.
        const {rows: createdOrderProduct} = await client.query('INSERT INTO order_products ("orderId", "productId", price, quantity) VALUES ($1,$2,$3,$4) RETURNING *',[orderId, productId, price, quantity])
        return createdOrderProduct
    }}catch(error){
        return (`Error while updating order pruduct with params id:${id}, price:${price}, quantity:${quantity}`, error)
    }
}

async function updateOrderProduct({ id, price, quantity }) {
    try{
        const {rows:product} = await client.query('UPDATE order_products SET price=$1,quantity=$2 WHERE id=$3 RETURNING *',[price,quantity,id])
        return product
    }catch(error){
        return (`Error while updating order pruduct with params id:${id}, price:${price}, quantity:${quantity}`, error)
    }
}

async function destroyOrderProduct(id) {
    try{
        const {rows: deletedProduct} =await client.query('DELETE FROM order_products WHERE id=$1 RETURNING *',[id])
        return deletedProduct
    }catch(error){
        return ('error caught destroying order product',error)
    }


}
module.exports = {
    destroyOrderProduct,
    updateOrderProduct,
    addProductToOrder,
    getOrderProductById
}