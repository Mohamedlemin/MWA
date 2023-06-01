
const express= require("express");
const router= express.Router();

const gameController = require("../controllers/gameController")
const studentController = require("../controllers/studentController")

router.route("/games")
.get(gameController.getAll)

router.route("/games/:firstNum")
.get(gameController.getRequestParams)

router.route("/students")
.get(studentController.getAll)

router.route("/students/:index")
.get(studentController.getOne)

module.exports = router;