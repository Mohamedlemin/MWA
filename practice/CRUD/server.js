 //connect to db
 require("./model/dbConnection")()
 // compile the model
 require("./model/games-model")

const cors = require('cors')
 const express = require("express")
 const app = express();

 const gamesRouter = require("./routers/gamesRouter")

 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use(cors)
 app.use("/api/games",gamesRouter)

 


 const port = process.env.PORT || 3000
 app.listen(port,()=>{
    console.log("the server is runing ");
 })