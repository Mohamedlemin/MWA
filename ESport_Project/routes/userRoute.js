const userController = require("../controllers/usersController");

const express = require("express");

const router = express.Router();

router
  .route("")
  .post(userController.createUser)
  
router
  .route("/login")
  .post(userController.login)


module.exports = router;