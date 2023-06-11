

const express = require("express")

const joubRouter = express.Router()
const jobController = require("../controllers/jobControllers")

joubRouter.get('/',jobController.getAll)
joubRouter.get('/:id',jobController.getOne)
joubRouter.delete('/:id',jobController.deleteOne)
joubRouter.post('/',jobController.create)
joubRouter.put('/:id',jobController.update)
joubRouter.patch('/:id',jobController.updatePatch)



module.exports = joubRouter