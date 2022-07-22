// grab our db client connection to use with our adapters
const client = require('../client');

const bcrypt = require('bcrypt'); //for encryption
const SALT = 10;

const createUser = async ({firstName, lastName, email, username, password }) => {
  try {
    const hash = await bcrypt.hash(password, SALT);
    const {rows: [user]} = await client.query(`
    INSERT INTO users 
    ("firstName", "lastName", email, username, password) 
    VALUES ($1, $2, $3, $4, $5)
    ON CONFLICT DO NOTHING
    RETURNING id, username, email;
    `, [firstName, lastName, email, username, hash]);
    if(user){
      return user
    }
    
  } catch (error) {
    console.error("ERROR CREATING USER");
    throw error;
  }
  
}

const getUser = async ({username, password}) => {
  console.log('getting user')
  try{
    const user = await getUserByUsername(username);
    if(!user) return;
    const hashedPassword = user.password;
    const passwordsMatch = await bcrypt.compare(password, hashedPassword);
    if(!passwordsMatch) return;
    delete user.password
    return user;
  }catch(error){
    throw error;
  }
}

const getUserByUsername = async ({username}) => {
  console.log('getting user by username')
  try{
    const {rows:[user]} = await client.query(`
    SELECT *
    FROM users
    WHERE username=$1;
    `, [username]);
    
    if(user){
      return user;
    }
  }catch(error){
    throw error;
  }
}


const getUserById = async (id) => {
  console.log('getting user by id: ', id)
  try{
    const {rows:[user]} = await client.query(`
    SELECT id, username
    FROM users
    WHERE id=$1;
    `, [id]);
    
    if(user){
      return user;
    }
    
    
  }catch(error){
    throw error;
  }
}

const getAllUsers = async () => {
  try {
    
    const {rows} = await client.query(`
    SELECT username, id 
    FROM users;`);
    return rows;
    
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUser,
  createUser,
  getAllUsers,
  getUserByUsername,
  getUserById,
};