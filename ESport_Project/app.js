require("dotenv").config()
require('./models/dbconnection');
require('./models/pmpl-model')
require('./models/team-model')
const express = require("express")


const path = require('path');
const router = require("./routes/index");
const public_folder = process.env.PUBLIC

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",express.static(path.join(__dirname, public_folder)));
app.use("/api",router)

app.listen(process.env.PORT,()=>{
    console.log("connected to server");
})

