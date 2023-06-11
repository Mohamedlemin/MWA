

const mongoose = require("mongoose")

const JOB = new  mongoose.Schema({
    title:String, 
    salary:Number, 
     description:String,
     experience:String, 
     skills:[String], 
    postDate:String,
    location:{
        cordinate : {
            type : [Number],
            index:"2dsphere"
        }
    }
        
})

mongoose.model("JOB",JOB,"jobSearch")

const getJob =function () {
    return mongoose.model("JOB");
} 


module.exports = {
    getJob,
    
    
}