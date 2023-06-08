// const mongoose = require("mongoose")

// require("./courseSchema")

// mongoose.connect('mongodb://localhost:27017/mogo-exercises').then( ()=>
//     console.log('connected')
// ).catch((err)=> console.log('could not connect' ,err))




async function getCourses() {
    const courses = await Course.find()
    console.log(courses);
}
