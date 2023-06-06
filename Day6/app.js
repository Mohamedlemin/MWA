const express = require('express')
const app = express();
require("dotenv").config()
const router = require("./routers/index")
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api" ,router)


app.listen(PORT,function () {
    console.log("server connected");
})