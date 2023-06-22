const express = require("express")
const router = express.Router({ mergeParams: true })
const teamController = require("../controllers/teamController")

// teams routes
router.route(process.env.SLASH)
        .get(teamController.getTeams)
        .post(teamController.addOneTeam)

router.route(process.env.TEAM_ID)
        .get(teamController.getOneTeam)
        .delete(teamController.deleteTeam)
        .put(teamController.fullupdate)
        .patch(teamController.patchUpdate)

module.exports = router