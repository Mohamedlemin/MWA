

const mongoose = require('mongoose')
require("./jobSearcch")
mongoose.connect("mongodb://127.0.0.1:27017/jobSearchDB").then(()=>
    console.log("mongodb connected")
).catch((err)=>
    console.log("not connected",err)
)