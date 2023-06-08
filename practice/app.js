const mongoose = require("mongoose")
require('dotenv').config()
const courseRouter = require("./routes/courseRouter")
const express = require("express")
const app = express()

mongoose.connect("mongodb://127.0.0.1:27017/mogo-exercises")
    .then(() => console.log("connected to mongoDB ..."))
    .catch(err => console.log('connection faild ',err))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/courses',courseRouter)


const port = process.env.PORT || 3000
app.listen(port,()=>console.log(`server is runing on port : ${port} ` ))