const mongoose = require("mongoose")

const teamSchema = mongoose.Schema({
    country : String,
    Best_Moment_clip : String,
    Description_clip :String,
    Players : [
         {
            name : String,
            country : String,
            role : String
         }
    ]
})

mongoose.model("Team",teamSchema,process.env.TEAM_COLLECTION)