const userController = require("../controllers/usersController");

const express = require("express");

const router = express.Router();

router
  .route("")
  .post(userController.createUser)
  
router
  .route(process.env.LOGIN)
  .post(userController.login)


module.exports = router;