const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:  {
      type: String,

    },
    username:  {
        type: String,
        required: [true, " username  is required "],
        unique:true
      },
    password:  {
        type: String,
        required: [true, " password is required "]
      }
  });


  mongoose.model(
    process.env.User_MODEL,
    userSchema,
    process.env.USER_COLLECTION
  );
  
  const userModel = function () {
    return mongoose.model(process.env.User_MODEL);
  }
  module.exports = {
    getModel: userModel
  }