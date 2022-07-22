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
    }).then(response => response.json())
        .then(result => {
          setToken(result.data.token);
          localStorage.setItem("jwt", result.data.token);
          alert(result.data.message);
        })
    console.log("sending back register info", register)
    return register
  } catch (err) {
    console.error(err);
  }
}

axios.post('/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

// export async function tokenRegister(inputUsername, inputPassword, setToken){
//   fetch(`/api/users/register`, {
//     method: "POST",
//     headers : {
//       "Content-Type" : "application/json"
//     },
//     body: JSON.stringify({
//       user: {
//         username: inputUsername,
//         password: inputPassword
//       }
//     })
//   }).then(response => response.json())
//     .then(result => {
//       setToken(result.data.token);
//       localStorage.setItem("jwt", result.data.token);
//       alert(result.data.message);
//     })
//     .catch(console.error);
// }

export async function tokenLogin(inputUsername, inputPassword, setToken){
  fetch(`/api/users/login`, {
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