const client = require('../client');

async function getOrderProductById(id) {
  const {
    rows: [product],
  } = await client.query(`
  SELECT * 
  FROM "order_products" 
  WHERE "productId"=$1`, 
  [id,]);

  return product;
}

async function addProductToOrder({ orderId, productId, price, quantity }) {
  try {
    const {rows: productOnOrderAlready} = await client.query(`
    SELECT * FROM "order_products"
    WHERE "orderId"=$1 
    AND "productId"=$2;
    `, [orderId, productId])

    if(!productOnOrderAlready.length){
      const {rows: addProductToOrder} = await client.query(`
      INSERT INTO "order_products"
      ("orderId", "productId", price, quantity)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
      `, [orderId, productId, price, quantity])
      return addProductToOrder

    } else{
      let newPrice = price + Number(productOnOrderAlready[0].price)
      let newQuantity = quantity + productOnOrderAlready[0].quantity
      const updateParams = {
        id : productOnOrderAlready[0].id,
        price : newPrice,
        quantity: newQuantity,
      }

      const updatedOrder = await updateOrderProduct(updateParams)
      return updatedOrder

    }
  } catch (error) {
    console.error(`Error while updating order product with params id:${id}, price:${price}, quantity:${quantity}`)
    throw error
  }
}

async function updateOrderProduct({ id, quantity }) {
  try {
    const { rows: [product] } = await client.query(`
      UPDATE "order_products" 
      SET quantity= $1
      WHERE id = $2
      RETURNING *`,
      [quantity, id]
    );
    return product;
  } catch (error) {
    return (
      `Error while updating order pruduct with params id:${id}, quantity:${quantity}`,
      error
    );
  }
}

async function destroyOrderProduct(id) {
  try {
    const { rows: [deletedProduct] } = await client.query(
      `DELETE FROM order_products WHERE id=$1 RETURNING *`,
      [id]
    );
    return deletedProduct;
  } catch (error) {
    return 'error caught destroying order product', error;
  }
}
module.exports = {
  destroyOrderProduct,
  updateOrderProduct,
  addProductToOrder,
  getOrderProductById,
};
