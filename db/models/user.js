// grab our db client connection to use with our adapters
const client = require('../client');
const bcrypt = require('bcrypt'); //for encryption
require('dotenv').config();

async function createUser({
  firstName,
  lastName,
  email,
  username,
  password
}) {
  try {
    const SALT = 10;
    const hash = await bcrypt.hash(password, SALT);
    const { rows: [user] } = await client.query(`
    INSERT INTO users 
    ("firstName", "lastName", email, username, password) 
    VALUES ($1, $2, $3, $4, $5)
    ON CONFLICT DO NOTHING
    RETURNING id, username, email;
    `, [firstName, lastName, email, username, hash]);
    if (user) {
      return user;
    }
  } catch (error) {
    console.error('ERROR CREATING USER');
    throw error;
  }
};

async function getUser({ username, password }) {
  try {
    const user = await getUserByUsername(username);
    if (!user) return;
    const hashedPassword = user.password;
    const passwordsMatch = await bcrypt.compare(password, hashedPassword);
    if (!passwordsMatch) return;
    delete user.password;
    return user;
  } catch (error) {
    throw error;
  }
};

async function getUserByUsername(username){
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    SELECT *
    FROM users
    WHERE username=$1;
    `,
      [username]
    );
    if (user) {
      return user;
    }
  } catch (error) {
    throw error;
  }
};

async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    SELECT *
    FROM users
    WHERE id=$1;
    `,
      [id]
    );
    delete user.password;

    if (user) {
      return user;
    }
  } catch (error) {
    throw error;
  }
};

async function getAllUsers() {
  try {
    const { rows } = await client.query(`
    SELECT username, id 
    FROM users;`);
    return rows;
  } catch (error) {
    throw error;
  }
};

async function updateUser({id, ...fields}) {
  const setString = Object.keys(fields).map(
    (key, index) => `"${ key }"=$${ index+1 }`
  ).join(', ')

  if (setString.length === 0) {
    return;
  }
  try {
    const { rows: [updatedUser] } = await client.query(`
    UPDATE users
    SET ${setString}
    WHERE id = ${id}
    RETURNING *
    ;`, Object.values(fields))
    return updatedUser
  } catch(err) {
    console.error("ERROR UPDATING USER")
    throw err
  }
}

module.exports = {
  getUser,
  createUser,
  getAllUsers,
  getUserByUsername,
  getUserById,
  updateUser
};
