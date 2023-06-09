
const mongoose = require("mongoose")

const gameSchema = mongoose.Schema({
    title : String,
    year : Number,
    rate : Number,
    price : Number
})

mongoose.model("Game",gameSchema)
