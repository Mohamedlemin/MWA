
require('./startup/db')();
require('./startup/logging')
require('dotenv').config()

const express = require("express")
const app = express()
const courseRouter = require("./routes/courseRouter")
const winston = require('winston');
const error = require('./middleware/error');

winston.add(new winston.transports.File({ filename: 'logfile.log' }))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/courses',courseRouter)

app.use(error);

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));