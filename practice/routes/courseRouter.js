const express= require("express")
const courseRouter = express.Router()
const {Course} = require('../database/courseSchema')

const CourseController = require("../controllers/courseController")

courseRouter.get("/",CourseController.getAllCourse)

courseRouter.get("/:id",async (req,res) => {
    try{
        console.log(req.params.id);
        
    const course = await Course.findById(req.params.id);
     if (course) {
        res.send(course);
    } else {
        res.status(404).send('The course with the given ID was not found.');
    }
    } catch (error) {
      console.error('Error:', error);
    }

})

courseRouter.delete("/:id",CourseController.deleteCourse)

// courseRouter.get('/',async (req,res)=>{
//     const courses = await Course.find()
//     console.log('get called');
//     res.send(courses)
// })


module.exports = courseRouter