
const express= require("express");
const router= express.Router();

const gameController = require("../controllers/gameController")

router.route("/games")
.get(gameController.getAll)

router.route("/games")
.post(gameController.createGame)

router.route("/games/:gameID")
.delete(gameController.deleteGame)



module.exports = router;