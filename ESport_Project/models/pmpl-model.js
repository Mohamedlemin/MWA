
const mongoose = require("mongoose")

const pmplSchema = mongoose.Schema({
    title : String,
    prize : Number,
    region : String,
    teams : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Team',
            required : true,

        }
    ]

})

mongoose.model("PMPL" , pmplSchema , process.env.PMPL_COLLECTION)

