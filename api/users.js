const usersRouter = require('express').Router();
const { getUserByUsername, getUserById, createUser } = require('../db/models/index')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env
const bcrypt = require('bcrypt')

//Creates new user, requires a username AND password. 
usersRouter.post('/register', async (req, res, next) => {
    const { username, password } = req.body
    
    try {
        const _user = await getUserByUsername(username)
        if (_user) {
            res.send({
                error: "Username error",
                name: "UserExistsError",
                message: `User ${_user.username} is already taken.`
            })
        }
        if (!username || !password) {
            res.send({
                name: "MissingCredentialsError",
                message: "Please supply username and password"
            })
        }

        if (password.length < 8) {
            res.send({
                error: "Password Error",
                message: "Password Too Short!",
                name: "PasswordLengthError",
            })
        }

        const user = await createUser({username, password})
        const token = jwt.sign({
            id: user.id,
            username
          }, JWT_SECRET)
        
        res.send(res.send(
            {
            token: token,
            user : user,
            message: `Thank you for registering ${username}`
            }
        ))
    } catch({ name, message}) {
        next({ name, message})
    }
})
// Supplies the user's data if valid token provided in header
usersRouter.get('/me', async(req, res, next) => {
    const prefix = 'Bearer ';
    const auth = req.header('Authorization');

  if (!auth) {
    res.status(401).send({
        error: "AuthorizationError",
        message: "You must be logged in to perform this action",
        name: "401 Error"
    })
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);

    try {
      const { id } = jwt.verify(token, JWT_SECRET);

      if (id) {
        const user = await getUserById(id);
        res.send({
            id: user.id,
            username: user.username
        })
      }
    } catch ({ name, message }) {
      res.send({
        error: 401
      });
    }
  } 
})

//Login User. Requires username AND password. Verifies encrypted password in DB
usersRouter.post('/login', async (req, res, next) => {
    const { username, password } = req.body

    if (!username || !password) {
        res.send({
            name: "MissingCredentialsError",
            message: "Username and password required."
        })
    }
    try {
        const user = await getUserByUsername(username)
        //If there's a user and the password = password, call jwt.sign
        if (user) {
            const validPassword = await bcrypt.compare(password, user.password)
            if (validPassword) {
                const token = jwt.sign({
                    id: user.id,
                    username: username
                }, JWT_SECRET)
            
                res.send({
                    user: user,
                    message: "Login Successful!",
                    token: token
                })
            }
        } else {
            res.send({
                message: "Incorrect username and/or password.",
                name: "CredentialsError"
            })
        }
    } catch({ name, message}) {
        next({ name, message})
    }
})

usersRouter.get('/me', async(req, res, next) => {
    const prefix = 'Bearer ';
    const auth = req.header('Authorization');

  if (!auth) {
    res.status(401).send({
        error: "AuthorizationError",
        message: "You must be logged in to perform this action",
        name: "401 Error"
    })
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);

    try {
      const { id } = jwt.verify(token, JWT_SECRET);

      if (id) {
        const user = await getUserById(id);
        res.send({
            id: user.id,
            username: user.username
        })
      }
    } catch ({ name, message }) {
      res.send({
        error: 401
      });
    }
  } 
})

module.exports = usersRouter