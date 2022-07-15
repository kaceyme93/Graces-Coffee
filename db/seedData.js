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
        price DECIMAL(12,2) NOT NULL,
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
        price: 100.0,
        inStock: true,
        category: 'Clothing',
        imageURL:
          'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      },
      ,
      {
        name: 'Sandwich',
        description: "It's a sandwich",
        price: 101.5,
        inStock: false,
        category: 'Food',
        imageURL:
          'https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
      },
      {
        name: 'Something else',
        description: "It's neither",
        price: 5000,
        inStock: true,
        category: 'Neither clothing nor food',
        imageURL:
          'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
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
