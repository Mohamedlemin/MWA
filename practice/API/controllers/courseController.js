

const {Course} = require('../database/courseSchema')
const bycript = require('bcrypt')

async function getAllCourse(req,res){
   const courses = await Course.find()
   res.status(200).json(courses)
}


const addCourse = function (req,res) {
    console.log("add user called");

    const resp = {
        status : 201,
        msg : {}
    };
    newCourse = {
        name:req.body.name,
        password :bycript.hashSync(req.body.password,bycript.genSaltSync(10))
    }
    Course.create(newCourse)
        .then((createdCourse)=>{
            resp.msg = createdCourse
        }).catch((err)=>{
            resp.status=500;
            resp.msg ={"err":err}
        })
        .finally(()=>{
            resp.status(resp.status).json(resp.msg)
        })
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