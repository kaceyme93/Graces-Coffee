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

export async function getSingleProduct() {
  try {
    const { data } = await axios.get('/api/products/:productId');
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getAllProducts() {
  try {
    const { data } = await axios.get('/api/products');
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function tokenRegister(inputUsername, inputPassword, setToken){
  fetch(`api/users/register`, {
    method: "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      user: {
        username: inputUsername,
        password: inputPassword
      }
    })
  }).then(response => response.json())
    .then(result => {
      setToken(result.data.token);
      localStorage.setItem("jwt", result.data.token);
      alert(result.data.message);
    })
    .catch(console.error);
}

export async function tokenLogin(inputUsername, inputPassword, setToken){
  fetch(`api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: inputUsername,
        password: inputPassword
      }
    })
  }).then(response => response.json())
    .then(result => {
      setToken(result.data.token);
      localStorage.setItem("jwt", result.data.token);
      alert(result.data.message);
    })
    .catch(console.error);
}