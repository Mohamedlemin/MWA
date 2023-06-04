const express = require("express")
require("dotenv").config()
require('./models/dbconnection');

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))




app.listen(process.env.PORT,()=>{
    console.log("connected to server");
})

