
const mongoose = require("mongoose")

const playerSchema = new mongoose.Schema({
    name: String,
    country: String,
    role: String
  });

const teamSchema = mongoose.Schema({
    name : String,
    country : String,
    Best_Moment_clip : String,
    Description_clip :String,
    players: [playerSchema]
})

const pmplSchema = mongoose.Schema({
    title : String,
    prize : String,
    region : String,
    year : Number,
    teams : [teamSchema] 

})

mongoose.model("Team",teamSchema,process.env.TEAM_COLLECTION)
mongoose.model("PMPL" , pmplSchema , process.env.PMPL_COLLECTION)

