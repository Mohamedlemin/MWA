require("dotenv").config()
require("./models/db")
const express = require('express')
const app = express()
const jobRouter = require("./routes/jobRoute")
const cors = require("cors");
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use("/api/jobs",jobRouter)

const port = process.env.PORT || 3000
app.listen(port,()=>{
  console.log("connected");
})


