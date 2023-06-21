
const mongoose = require("mongoose")

// export interface Team {
  //   _id:string;
  //   name: string;
  //   country: string;
  //   Best_Moment_clip: string;
  //   Description_clip: string;
  //   teamLogo:string
  //   players: Player[];
  // }
  
  // export interface Player {
  //   name: string;
  //   picture: string;
  //   role: string;
  // }
const playerSchema = new mongoose.Schema({
    name: String,
    picture: String,
    role: String
  });

const teamSchema = mongoose.Schema({
    name : String,
    country : String,
    Best_Moment_clip : String,
    Description_clip :String,
    teamLogo:String,
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

