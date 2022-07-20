const client = require('./client');

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
    console.log('Finished constructing Tables.');
  } catch (error) {
    console.error('ERROR CONSTRUCTING TABLES!');
    throw error;
  }
}

async function rebuildDB() {
  try {
    await client.connect();
    await dropTables();
    await createTables();
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
