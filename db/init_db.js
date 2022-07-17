const {
  client,
  // declare your model imports here
  // for example, User
  Products,
  Orders,
} = require('./');

async function buildTables() {
  try {
    console.log('buildTables started');
    client.connect();

    await client.query('DROP TABLE IF EXISTS products CASCADE;');
    await client.query('DROP TABLE IF EXISTS users CASCADE;');
    await client.query('DROP TABLE IF EXISTS orders CASCADE;');
    await client.query('DROP TABLE IF EXISTS order_products CASCADE;');

    // build tables in correct order
    console.log('creating products table');
    await client.query(`CREATE TABLE products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      price DECIMAL(12,2) NOT NULL,
      "imageURL" TEXT DEFAULT 'https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg',
      "inStock" BOOLEAN DEFAULT false,
      category VARCHAR(255) NOT NULL
      )`);
    console.log('creating users table');
    // this users table does not currently check email for format, which is stated in the milestones... May need to check this during createUser function.
    await client.query(`CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      "firstName" VARCHAR(255) NOT NULL,
      "lastName" VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      "imageURL" TEXT DEFAULT 'https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg',
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) UNIQUE NOT NULL,
      "isAdmin" BOOLEAN NOT NULL DEFAULT false
    )`);

    console.log('creating orders table');
    await client.query(`CREATE TABLE orders (
      id SERIAL PRIMARY KEY,
      status VARCHAR(255) DEFAULT 'created',
      "userId" INTEGER REFERENCES users(id),
      "datePlaced" DATE
    )`);

    console.log('creating order_products table');
    await client.query(`CREATE TABLE order_products (
      id SERIAL PRIMARY KEY,
      "productId" INTEGER REFERENCES products(id),
      "orderId" INTEGER REFERENCES orders(id),
      price DECIMAL(12,2) NOT NULL,
      quantity INTEGER NOT NULL DEFAULT 0
    )`);
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data by leveraging your
    // Model.method() adapters to seed your db, for example:
    // const user1 = await User.createUser({ ...user info goes here... })
    const product1 = await Products.createProduct({
      name: 'A Shirt',
      description: "It's a shirt",
      price: 9.99,
      inStock: true,
      category: 'Clothing',
      imageURL: 'https://bit.ly/3IGVaml',
    });

    const product2 = await Products.createProduct({
      name: 'Sandwich',
      description: "It's a sandwich",
      price: 101.5,
      inStock: false,
      category: 'Food',
      imageURL: 'https://bit.ly/3O8OUER',
    });

    const product3 = await Products.createProduct({
      name: 'Something else',
      description: "It's neither",
      price: 5000,
      inStock: true,
      category: 'Neither clothing nor food',
      imageURL: 'https://bit.ly/3RI61Ak',
    });

    const order1 = await Orders.createOrder({
      status: 'created',
      userId: null,
    });
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
