const express = require("express")

const gameRouter =express.Router()
const gameController = require("../controllers/gameController")

gameRouter.route("/")
          .get(gameController.getAllGames)
          .post(gameController.create)

gameRouter.route("/:id")
          .get(gameController.getOne)
          .delete(gameController.removeGame)
          .put(gameController.update)



module.exports = gameRouter