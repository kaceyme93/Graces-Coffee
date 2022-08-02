module.exports = {
  ...require('./products'),
  ...require('./orders'),
  ...require('./user'),
  ...require('./orderProducts'),
  // add each model to your exports object here
  // so that you can use them in your express server api routers
  // for example, create a users.js file for a User model
  // and User: require('./user') here
  Products: require('./products'),
  Orders: require('./orders'),
  OrderProducts: require('./orderProducts'),
  Users: require('./user'),
};

// then, in your API, you'll require the appropriate model
// and use its database connectors
// ie User.getUserById(), where user.js had a module.exports
// that looked like this: module.exports = { getUserById, ... }
