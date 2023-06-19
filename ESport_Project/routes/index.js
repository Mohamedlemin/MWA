const pmpRoute = require("./pmplRoute")
const teamRoute = require("./teamRoute")
const userRoute = require("./userRoute")


const express = require("express")
const router = express.Router()



router.use("/pmpls",pmpRoute);
router.use("/pmpls/:pmplID/teams",teamRoute);
router.use("/users",userRoute);


 




module.exports = router;






