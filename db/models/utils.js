const client = require('../client');

async function attachProductsToOrders() {
  try {
    const { rows: products } = await client.query(`
      SELECT *
      FROM "order_products" op
      JOIN products
      ON products.id = op."productId"
      `);

    return products;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function filterProducts(orders) {
  const products = await attachProductsToOrders(orders);
  for (const order of orders) {
    const filteredProducts = products.filter((product) => {
      return product.orderId === order.id;
    });

    order.products = filteredProducts;
  }

  return orders;
}

async function orderStatusCheck(id) {
  try {
    const { rows: [joinedTable] } = await client.query(`
    SELECT op.*, o.id AS "ogOrderId", o.status
    FROM "order_products" op
    JOIN orders o
    ON op."orderId" = o.id
    `)

    return joinedTable
  } catch(err) {
    console.error("ERROR CHECKING ORDER STATUS")
    throw err
  }
}

module.exports = { filterProducts };
