const mongoose = require("mongoose")

const Course = mongoose.model('Course', new mongoose.Schema(
    {
        name:String,
        author:String,
        tags:[String],
        date:{
            type : Date,
            default: Date.now
        },
        isPublished : Boolean

    }
)
)

exports.Course = Course
