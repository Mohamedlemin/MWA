

const {Course} = require('../database/courseSchema')


async function getAllCourse(req,res){
   const courses = await Course.find()
   res.status(200).json(courses)
}



async function createCourse(req,res){
   
//    const courses = await Course.find()
//    res.status(200).send(courses.json())
//    console.log(courses);
}

async function updateCourse(req,res) {
    const courseID = req.params.id
    const course = await Course.findByIdAndUpdate(courseID,{
        $set:{
            author :'jack'
        }
    },{new : true})
    res.status(200).send(course)
}

async function deleteCourse(req,res) {
  const courseID = req.params.id
  const course = await  Course.findByIdAndRemove({_id:courseID})
  res.status(200).send(course)
}

module.exports = {
    getAllCourse,
    updateCourse,
    deleteCourse,
    createCourse
}