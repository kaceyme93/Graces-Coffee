const client = require('./client');
const { createProduct } = require('./models/products');

async function dropTables() {
  console.log('Dropping All Tables...');
  // drop all tables, in the correct order
  try {
    await client.query(`
      DROP TABLE IF EXISTS products CASCADE;
      ;`);
  } catch (error) {
    console.error('ERROR DROPPING TABLES');
    throw error;
  }
}

async function createTables() {
  try {
    console.log('Starting to build tables...');
    // create all tables, in the correct order
    await client.query(`
      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        price INTEGER NOT NULL,
        "imageURL" TEXT DEFAULT 'https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg',
        "inStock" BOOLEAN DEFAULT false,
        category VARCHAR(255) NOT NULL
        );`);
    console.log('Finished construction Tables.');
  } catch (error) {
    console.error('ERROR CONSTRUCTING TABLES!');
    throw error;
  }
}
async function createInitialProducts() {
  console.log('Starting to create users...');
  try {
    const productsToCreate = [
      {
        name: 'A Shirt',
        description: "It's a shirt",
        price: 100,
        inStock: true,
        category: 'Clothing',
      },
      ,
      {
        name: 'Sandwich',
        description: "It's a sandwich",
        price: 101,
        inStock: false,
        category: 'Food',
      },
      {
        name: 'Something else',
        description: "It's neither",
        price: 102,
        inStock: true,
        category: 'Neither clothing nor food',
      },
    ];
    const products = await Promise.all(productsToCreate.map(createProduct));

    console.log('products created:');
    console.log(products);
    console.log('Finished creating products!');
  } catch (error) {
    console.error('Error creating products!');
    throw error;
  }
}

async function rebuildDB() {
  try {
    await client.connect();
    await dropTables();
    await createTables();
    await createInitialProducts();
  } catch (error) {
    console.log('Error during rebuildDB');
    throw error;
  }
}
rebuildDB()
  .catch(console.error)
  .finally(() => client.end());

module.export = {
  rebuildDB,
  dropTables,
  createTables,
};
