const express = require("express")
const router = express.Router()
const pmplController = require("../controllers/pmplController")
const teamController = require("../controllers/teamController")


// PMPL routes
router.route("/pmpls")
        .get(pmplController.getAll)
        .post(pmplController.addOne)
router.route("/pmpls/:pmplID")
        .delete(pmplController.deletePMPL)
        .put(pmplController.FullupdatePMPL)
        .patch(pmplController.patchUpdate)
 

// teams routes
router.route("/pmpls/:pmplID/teams")
        .get(teamController.getTeams)
        .post(teamController.addOneTeam)
router.route("/pmpls/:pmplID/teams/:teamID")
        .get(teamController.getOneTeam)
        .delete(teamController.deleteTeam)
        .put(teamController.fullupdate)
        .patch(teamController.patchUpdate)


module.exports = router;