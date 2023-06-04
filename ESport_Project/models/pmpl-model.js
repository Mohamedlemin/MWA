
const mongoose = require("mongoose")
const teamSchema = require("./team-model")


const pmplSchema = mongoose.Schema({
    title : String,
    prize : String,
    region : String,
    year : Number,
    teams : [teamSchema] 

})

mongoose.model("PMPL" , pmplSchema , process.env.PMPL_COLLECTION)

