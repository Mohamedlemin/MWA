const express= require("express")
const courseRouter = express.Router()
const CourseController = require("../controllers/courseController")

courseRouter.get("/",CourseController.getAllCourse)

// courseRouter.get('/',async (req,res)=>{
//     const courses = await Course.find()
//     console.log('get called');
//     res.send(courses)
// })


module.exports = courseRouter