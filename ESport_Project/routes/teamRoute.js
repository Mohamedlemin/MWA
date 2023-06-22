const express = require("express")
const router = express.Router({ mergeParams: true })
const teamController = require("../controllers/teamController")
const requestValidator = require("../util/authValidator")

// teams routes
router.route(process.env.SLASH)
        .get(teamController.getTeams)
        .post(requestValidator.isAuthorized,teamController.addOneTeam)

router.route(process.env.TEAM_ID)
        .get(teamController.getOneTeam)
        .delete(requestValidator.isAuthorized,teamController.deleteTeam)
        .put(requestValidator.isAuthorized,teamController.fullupdate)
        .patch(requestValidator.isAuthorized,teamController.patchUpdate)

module.exports = router