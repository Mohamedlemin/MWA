// PMPL routes
const express = require("express");
const pmplController = require("../controllers/pmplController")
const requestValidator = require("../util/authValidator")
const router = express.Router();

router.route('')
        .get(pmplController.getAll)
        .post(requestValidator.isAuthorized,pmplController.addOne)

router.route(process.env.PMPL_ID)
        .get(pmplController.getOne)
        .delete(requestValidator.isAuthorized,pmplController.deletePMPL)
        .put(requestValidator.isAuthorized,pmplController.FullupdatePMPL)
        .patch(requestValidator.isAuthorized,pmplController.patchUpdate)
        
module.exports = router;