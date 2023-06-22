// PMPL routes
const express = require("express");
const pmplController = require("../controllers/pmplController")

const router = express.Router();

router.route('')
        .get(pmplController.getAll)
        .post(pmplController.addOne)
router.route(process.env.PMPL_ID)
        .get(pmplController.getOne)
        .delete(pmplController.deletePMPL)
        .put(pmplController.FullupdatePMPL)
        .patch(pmplController.patchUpdate)



module.exports = router;