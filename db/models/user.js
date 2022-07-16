// grab our db client connection to use with our adapters
const client = require('../client');

const bcrypt = require('bcrypt'); //for encryption

module.exports = {
  getUser,
  createUser,
  getAllUsers,
  getUserByUsername,
  getUserById,
};

const createUser = async ({firstName, lastName, email, username, password }) => {
  console.log('creating user')

}

const getUser = async ({username, password}) => {
  console.log('getting user')
  const { rows: [ user ] } = await client.query(`SELECT username, id FROM users WHERE username = $1 AND password = $2`, [username , password])
  return user
}

const getUserByUsername = async ({username}) => {
  console.log('getting user by username')
  const {rows: [user]} = await client.query('SELECT username, id FROM users WHERE username=$1',[username])
}


const getUserById = async (id) => {
  console.log('getting user by id: ', id)
  const {rows: [user]} = await client.query('SELECT username, id FROM users WHERE id=$1',[id])
}

async function getAllUsers() {
  const {rows: [users]} = await client.query('SELECT username, id FROM users')
  return users
}
