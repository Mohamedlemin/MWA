const mongoose = require('mongoose');
const mongoURI = process.env.DB_URL;
const db = mongoose.connection;
require("./pmpl-model")
require("./team-model")

const callbackify = require("util").callbackify


const dbcloseWithCallback = callbackify(function () {
    return db.close()
})

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});



process.on('SIGINT', () => {
    dbcloseWithCallback(() => {
    console.log(process.env.SIGINT_MESSAGE);
    process.exit();
  });
});


process.once("SIGUSR2", function() {
    dbcloseWithCallback(function() {
    console.log(process.env.SIGUSR2_MESSAGE);
    process.kill(process.pid, "SIGUSR2");
    });
    });

module.exports = db;
