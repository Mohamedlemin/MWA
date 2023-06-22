const responseHandler = require("../util/handleResponse");
const User = require("../models/user-model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const util = require('util');

const createUser = function(req, res)  {
    const { username, password } = req.body;
    bcrypt.genSalt(parseInt(process.env.TEN))
      .then(salt => bcrypt.hash(password, salt))
      .then(hashedPassword => _createUser({ username, password: hashedPassword }))
      .then(() => responseHandler.setResponse(process.env.USER_CREATED,process.env.RESPONSE_STATUS_200))
      .catch((error) => responseHandler.setResponse(error,process.env.ERROR_STATUS_500))
      .finally(()=> responseHandler.sendResponse(res));
  }



const login= function(req, res)  {
    const { username, password } = req.body;
  
    User.getModel().findOne({ username })
    .then((user)=>_isUserFound(user))
    .then((user)=>_comparePasswords(password,user.password))
    .then(()=>_generateToken(username))
    .then((token) => responseHandler.setResponse({message: process.env.SUCCESS_MESSAGE ,token},process.env.RESPONSE_STATUS_200))
    .catch((error) => responseHandler.setResponse(error,process.env.ERROR_STATUS_500))
    .finally(()=> responseHandler.sendResponse(res));
  };


const _createUser = function(user){
    return User.getModel().create(user);
}

function _isUserFound(user) {
  return new Promise((resolve, reject) => {
    if (!user) {
      reject(process.env.USER_NOT_FOUND);
    }else{
      resolve(user);
    }
  });
}


const _bcryptCompare = util.promisify(bcrypt.compare);
const _jwtSign = util.promisify(jwt.sign);

function _comparePasswords(password, hashedPassword) {
  return _bcryptCompare(password, hashedPassword);
}

function _generateToken(username) {
  return new Promise((resolve, reject) => {
    _jwtSign({ username }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TOKEN_DURATION
    }, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
}



  module.exports= {
    createUser,
    login
  }
  