
const mongoose = require('mongoose')
const mongoURI = process.env.DB_URL 

require("./games-model")
module.exports = function () {
    mongoose.connect('mongodb://127.0.0.1:27017/meanGames')
            .then(()=> console.log('connected to mongoDB'))
            .catch((err)=> console.log('err',err))
}