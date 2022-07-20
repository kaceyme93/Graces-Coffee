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

module.exports = { requireAdmin };
