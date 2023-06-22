// const pmpRoute = require("./pmplRoute")
// const teamRoute = require("./teamRoute")
// const userRoute = require("./userRoute")


const express = require("express")
const router = express.Router()
const pmplController = require("../controllers/pmplController")
const teamController = require("../controllers/teamController")
const userController = require("../controllers/usersController")



// router.use("/pmpls",pmpRoute);
// router.use("/pmpls/:pmplID/teams",teamRoute);
// router.use("/users",userRoute);



router.route("/pmpls")
    .get(pmplController.getAll)
    .post(pmplController.addOne)
router.route("/pmpls/:pmplID")
    .get(pmplController.getOne)
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

router
    .route("")
    .post(userController.createUser)

router
    .route("/users/login")
    .post(userController.login)



module.exports = router;






