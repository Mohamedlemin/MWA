const express = require("express")
const route = express.Router()

route.Router("/games")
     .get(gameController.getAll)