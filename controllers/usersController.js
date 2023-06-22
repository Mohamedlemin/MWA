
const responseUtil = require("../util/handleResponse");
const User = require("../models/user-model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = (req, res) => {
    const { name,username, password } = req.body;
  
    bcrypt.genSalt(parseInt(process.env.TEN))
      .then(salt => bcrypt.hash(password, salt))
      .then(hashedPassword => {
        const user = { name,username, password: hashedPassword };
        return User.getModel().create(user);
      })
      .then(() => {
        res.status(process.env.RESPONSE_STATUS_200).json({ message: process.env.USER_CREATED_SUCCESSFULLY });
      })
      .catch(err => {
        res.status(process.env.ERROR_STATUS_500).json({ error: err.message });
      });
  };


  const login= (req, res) => {
    const { username, password } = req.body;
  
    User.getModel().findOne({ username })
      .then(user => {
        if (!user) {
          return res.status(process.env.ERROR_STATUS_404).json({ error: process.env.USER_NOT_FOUND });
        }
  
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            return res.status(process.env.ERROR_STATUS_500).json({ error: process.env.FAILED_TO_COMPARE_PASSWORD });
          }
  
          if (!result) {
            return res.status(process.env.ERROR_STATUS_401).json({ error: process.env.INVALID_PASSWORD});
          }
      // Generate JWT token
      const token = jwt.sign({ username: user.username }, process.env.SECRET);
      res.status(process.env.ERROR_STATUS_200).json({ message:process.env.LOGIN_SUCCESSFUL ,token});
    });
  })
  .catch(err => res.status((process.env.ERROR_STATUS_500).json({ error: err.message })));
  };
  
  module.exports= {
    createUser,
    login
  }


