require("dotenv").config()
require('./models/dbconnection');
require('./models/pmpl-model')


const express = require("express")
const router = require("./routes/index");
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(process.env.API, function (req, res, next) {
    res.header(process.env.ACCESS_CONTROL_ALLOW_ORIGIN, process.env.ALLOW_ORIGIN);
    res.header(process.env.ACCESS_CONTROL_ALLOW_HEADERS, process.env.ALLOW_HEADERS);
    res.header(process.env.ACCESS_CONTROL_ALLOW_METHODS, process.env.ALLOW_METHODS);
    next()
});

app.use(process.env.API, router)



const server= app.listen(process.env.PORT, function() {
    console.log(process.env.MSG_SERVER_START, server.address().port);
});