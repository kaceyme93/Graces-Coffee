async function attachProductsToOrders() {
  try {
    const { rows: products } = await client.query(`
      SELECT *
      FROM order_products
      JOIN products
      ON products.id = order_products."productId"
      `);

    return products;
  } catch (error) {
    console.log(error);
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

module.exports = { filterProducts };
