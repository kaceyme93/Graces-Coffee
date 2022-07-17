const client = require('../client');
const { filterProducts } = require('./utils');

async function getOrderById(id) {
  try {
    const {
      rows: [order],
    } = await client.query(
      `
        SELECT *
        FROM orders
        WHERE id = $1;
    `,
      [id]
    );

    const result = await filterProducts(order);

    return result;
  } catch (error) {
    console.error('ERROR GETTING ORDER BY ID');
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
  // getAllOrders,
  // getOrdersByUser,
  // getOrdersByProduct,
  //   getCartByUser,
  createOrder,
};
