import axios from 'axios';


// this file holds your frontend network request adapters
// think about each function as a service that provides data
// to your React UI through AJAX calls

// for example, if we need to display a list of users
// we'd probably want to define a getUsers service like this:

/* 
  export async function getUsers() {
    try {
      const { data: users } = await axios.get('/api/users')
      return users;
    } catch(err) {
      console.error(err)
    }
  }
*/

export async function getAPIHealth() {
  try {
    const { data } = await axios.get('/api/health');
    return data;
  } catch (err) {
    console.error(err);
    return { healthy: false };
  }
}

export async function getSingleProduct(productId) {
  try {
    const { data: product } = await axios.get(`/api/products/${productId}`);
    return product;
  } catch (err) {
    console.error(err);
  }
}

export async function getAllProducts() {
  try {
    const { data: products } = await axios.get('/api/products');
    return products;
  } catch (err) {
    console.error(err);
  }
}

export async function tokenRegister(inputUsername, inputPassword, inputEmail, inputFirst, inputLast, setToken){
  try {
    const {data: register} = await axios.post('/api/users/register', {
      username : inputUsername,
      password : inputPassword,
      email : inputEmail,
      firstName : inputFirst,
      lastName : inputLast
    });
      setToken(register.token);
      localStorage.setItem("jwt", register.token);
      alert(register.message);

  } catch (err) {
    console.error(err);
  }
}


export async function tokenLogin(inputUsername, inputPassword, setToken){
  try {
    const {data: login} = await axios.post('/api/users/login', {
      username : inputUsername,
      password : inputPassword
    });
      setToken(login.token);
      localStorage.setItem("jwt", login.token);
      alert(login.message);

  } catch (err) {
    console.error(err);
  }
}

export async function currentUserInfo(setUserInfo, token){
  try {
    const {data: user} = await axios.get('/api/users/me', {
      headers: makeHeaders(token)
    })
    setUserInfo(user);
  } catch (error) {
    console.error(error)
  }
}


const makeHeaders = (token) => {
  return (token ? 
  {
      "Content-Type" : "application/json",
      "Authorization" : `Bearer ${token}`
  } :
  {
      "Content-Type" : "application/json"
  } )
}