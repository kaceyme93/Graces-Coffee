const client = require('../client');
const { filterProducts } = require('./utils');

async function getOrderById(id) {
  try {
    const {
      rows: order,
    } = await client.query(
      `
        SELECT *
        FROM orders
        WHERE id = $1;
    `,
      [id]
    );
      console.log("order from db function",order)
    const result = await filterProducts(order);
    console.log("result is", result)
    return result;
  } catch (error) {
    console.error('ERROR GETTING ORDER BY ID');
    throw error;
  }
}

async function getAllOrders() {
  try {
    const { rows: orders } = await client.query(`
        SELECT *
        FROM orders
    `);

    const result = await filterProducts(orders);

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getOrdersByUser({ id }) {
  try {
    const { rows: orders } = await client.query(
      `
        SELECT *
        FROM orders
        JOIN users
        ON orders."userId" = users.id
        WHERE users.id = $1;
      `,
      [id]
    );

    const result = await filterProducts(orders);

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getOrdersByProduct({ id }) {
  try {
    const { rows: orders } = await client.query(
      `
        SELECT *
        FROM orders
        JOIN "order_products" op
        ON op."orderId" = orders.id
        JOIN products
        ON products.id = op."productId"
        WHERE "productId" = $1;
      `,
      [id]
    );

    const result = await filterProducts(orders);

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getCartByUser({ id }) {
  try {
    const {
      rows: order,
    } = await client.query(
      `
       SELECT *
       FROM orders
       WHERE "userId" = $1
       AND status = 'created';
      `,
      [id]
    );

    const result = await filterProducts(order);

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
 
async function createOrder({ status, userId }) {
  try {
    const {
      rows: [order],
    } = await client.query(
      `
        INSERT INTO orders(status, "userId")
        VALUES($1, $2)
        RETURNING *;
      `,
      [status, userId]
    );

    return order;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  getOrderById,
  getAllOrders,
  getOrdersByUser,
  getOrdersByProduct,
  getCartByUser,
  createOrder,
};
