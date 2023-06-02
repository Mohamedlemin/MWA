
const express= require("express");
const router= express.Router();

const gameController = require("../controllers/gameController")

router.route("/games")
.get(gameController.getAll)

router.route("/games/:firstNum")
.get(gameController.getRequestParams)



module.exports = router;