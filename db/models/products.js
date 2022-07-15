const client = require("../client");

//Gets All Products And Returns Array With All Products
async function getAllProducts() {
 try {
    const { rows: products } = await client.query(`
    SELECT *
    FROM products;`)

    return products
 } catch(error) {
    console.error("ERROR GETTING ALL PRODUCTS")
    throw error
 }
}
//Gets Specific Product By Passed In Id
async function getProductById(id) {
    try {
        const {rows: [product] } = await client.query(`
        SELECT *
        FROM products
        WHERE id = ($1);
        `, [id])

        return product
    } catch(error) {
        console.error("ERROR GETTING PRODUCT BY ID")
        throw error
    }
}

//Creates New Product And Returns New Product
async function createProduct(product) {
    const { name, description, price, imageURL, inStock, category} = product
    try {
        const { rows: [newProduct] } = await client.query(`
        INSERT INTO products(name, description, price, "imageUrl", "inStock", category)
        VALUES ($1, $2, $3, $4, $5, $6)
        ON CONFLICT (name) DO NOTHING
        RETURNING *;
        `, [name, description, price, imageURL, inStock, category])

        return newProduct
    }catch(error) {
        console.error("ERROR CREATING NEW PRODUCT")
        throw error
    }
}

module.exports = {
    getProductById,
    getAllProducts,
    createProduct
}