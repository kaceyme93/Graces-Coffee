const {
  client,
  // declare your model imports here
  // for example, User
} = require('./');

async function buildTables() {
  try {
    console.log("buildTables started")
    client.connect();
    
    await client.query('DROP TABLE IF EXISTS products CASCADE;')
    await client.query('DROP TABLE IF EXISTS users CASCADE;')
    await client.query('DROP TABLE IF EXISTS orders CASCADE;')
    await client.query('DROP TABLE IF EXISTS order_products CASCADE;')

    // build tables in correct order
    console.log('creating products table')
    await client.query(`CREATE TABLE products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      price NOT NULL,
      "imageURL" TEXT DEFAULT https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg,
      "inStock" BOOLEAN DEFAULT false,
      category NOT NULL
      )`)
    console.log('creating users table') 
      // this users table does not currently check email for format, which is stated in the milestones... May need to check this during createUser function.
    client.query(`CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      "firstName" NOT NULL,
      "lastName"NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      "imageURL" TEXT DEFAULT 'https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg',
      username UNIQUE NOT NULL,
      password UNIQUE NOT NULL,
      "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    )`)

    console.log('creating orders table')
    client.query(`CREATE TABLE orders (
      id SERIAL PRIMARY KEY,
      status VARCHAR(255) DEFAULT 'created',
      "userId" INTEGER REFERENCES users(id),
      datePlaced DATE
    )`)

    console.log('creating order_products table')
    client.query(`CREATE TABLE order_products (
      id SERIAL PRIMARY KEY,
      "product_id" INTEGER REFERENCES products(id),
      "orderId" REFERENCES orders(id),
      price INTEGER NOT NULL,
      QUANTITY INTEGER NOT NULL DEFAULT 0
    )`)
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data by leveraging your
    // Model.method() adapters to seed your db, for example:
    // const user1 = await User.createUser({ ...user info goes here... })
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
