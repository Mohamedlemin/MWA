
const responseUtil = require("../util/handleResponse");
const User = require("../models/user-model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = (req, res) => {
    const { name,username, password } = req.body;
  
    bcrypt.genSalt(10)
      .then(salt => bcrypt.hash(password, salt))
      .then(hashedPassword => {
        const user = { name,username, password: hashedPassword };
        return User.getModel().create(user);
      })
      .then(() => {
        res.status(200).json({ message: 'User created successfully' });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  };


  const login= (req, res) => {
    const { username, password } = req.body;
  
    User.getModel().findOne({ username })
      .then(user => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
  
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            return res.status(500).json({ error: 'Failed to compare passwords' });
          }
  
          if (!result) {
            return res.status(401).json({ error: 'Invalid password' });
          }
        // Generate JWT token
          const token = jwt.sign({ username: user.username }, 'secretKey');
          res.status(200).json({ message: 'Login successful' ,token});
        });
      })
      .catch(err => res.status(500).json({ error: err.message }));
  };
  
  module.exports= {
    createUser,
    login
  }

