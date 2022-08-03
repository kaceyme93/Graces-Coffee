const requireAdmin = (req, res, next) => {
  
  if (req.user.isAdmin !== true) {
    res.status(401).send({
      message: 'You must be an admin to perform this action',
      name: 'UnauthorizedAdminError',
      error: 'Not an admin',
    });
  }

  next();
};

const requireLogin = (req, res, next) => {
  if (!req.user) {
   next({
      message: 'You must be logged in to perform this action',
      name: 'UnauthorizedUserError',
      error: 'Not logged in',
    });
  } 
  next()

};

module.exports = { requireAdmin, requireLogin };
