const express = require("express")
const router = express.Router()
const pmplController = require("../controllers/pmplController")
const teamController = require("../controllers/teamController")

router.route("/pmpls")
        .get(pmplController.getAll)
        .post(pmplController.addOne)
router.route("/pmpls/:pmplID")
        .delete(pmplController.deletePMPL)
 

router.route("/pmpls/:pmplID/teams")
        .get(teamController.getTeams)
        .post(teamController.addOneTeam)
        
router.route("/pmpls/:pmplID/teams/:teamID")
        .get(teamController.getOneTeam)

module.exports = router;