const client = require('../client');


//Gets All Products And Returns Array With All Products
async function getAllProducts() {
  try {
    const { rows: products } = await client.query(`
    SELECT *
    FROM products;`);

    return products;
  } catch (error) {
    console.error('ERROR GETTING ALL PRODUCTS');
    throw error;
  }
}
//Gets Specific Product By Passed In Id
async function getProductById(id) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
        SELECT *
        FROM products
        WHERE id = ($1);
        `,
      [id]
    );

    return product;
  } catch (error) {
    console.error('ERROR GETTING PRODUCT BY ID');
    throw error;
  }
}

//Creates New Product And Returns New Product
async function createProduct(product) {
  const {
    name,
    description,
    price,
    imageURL,
    inStock,
    category,
    origin,
    roast,
    size,
  } = product;
  try {
    const {
      rows: [newProduct],
    } = await client.query(
      `
        INSERT INTO products(name, description, price, "imageURL", "inStock", category, origin, roast, size)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING *;
        `,
      [
        name,
        description,
        price,
        imageURL,
        inStock,
        category,
        origin,
        roast,
        size,
      ]
    );

    return newProduct;
  } catch (error) {
    console.error('ERROR CREATING NEW PRODUCT');
    throw error;
  }
}

module.exports = {
  getProductById,
  getAllProducts,
  createProduct,
};
