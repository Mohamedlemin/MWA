require("dotenv").config();
require("./data/dbconection.js").open()
const express = require('express');
const app = express();
const path = require('path');
const router = require("./routes/index");

console.log(" App start ");

const port = process.env.PORT;
const public_folder = process.env.PUBLIC;

app.use("/api",function (req,res,next) {
  res.header('Access-Control-Allow-Origin','http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, XRequested-With, Content-Type, Accept');
  next()
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/pages",express.static(path.join(__dirname, public_folder)));
app.use("/api",router)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

console.log("App End");