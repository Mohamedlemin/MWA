

const {Course} = require('../database/courseSchema')


async function getAllCourse(req,res){
   const courses = await Course.find()
   res.status(200).send(courses)
}

async function createCourse(req,res){
//    const courses = await Course.find()
//    res.status(200).send(courses.json())
//    console.log(courses);
}

async function updateCourse(id) {
    const course = await Course.findByIdAndUpdate(id,{
        $set:{
            author :'jack'

        }
    },{new : true})
    console.log(course);
}

async function deleteCourse(id) {
  const res1 = await  Course.delete({_id:id})
  const course = await  Course.findByIdAndRemove({_id:id})
    console.log(course);
}

module.exports = {
    getAllCourse,
    updateCourse,
    deleteCourse,
    createCourse
}