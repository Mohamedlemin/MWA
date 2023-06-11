

const { response } = require('express')
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


const _initilizeResponse = function (status,msg){
  return response = {
    status : status,
    msg : msg
  }
}
const _setResponse = function (status,msg){
  return response = {
    status : status,
    msg : msg
  }
}
const login = function(req,res){
    console.log("login called");
    const response = _initilizeResponse(200,{message :" messge should never be sent" })
    if (req.body && req.body.username && req.body.password) {
        Course.findOne({"username":req.body.username})
             .then((foundUser)=>_userExist(foundUser))
             .then((user)=>_checkPassword(user.password,req.body.password))
             .then(()=>console.log("loging success"))
             .catch((err)=>console.log(err))
            //  .finally(()=> console.log("always called"))
    }else{
        
    }

}

const _userExist= function (user){
    return new Promise((resolve,reject)=>{
        if (user) {
            resolve(user)
        }else{
            reject(console.log())
        }
    })
}

const _checkPassword = function (databasePassword,requestPassword) {
   return new Promise ((resolve,reject) =>{
    bycript.compare(requestPassword,databasePassword)
            .then((passwordMatch)=>{
                if (passwordMatch) {
                    resolve()
                }else{
                    reject()
                }
            })
        })
}

// const _bigfunction = function(foundUser){
//     databasePassword = foundUser.password
//     requestPassword = req.password;
//    let passwordMatch = bycript.compareSync(requestPassword,databasePassword)
//    if (passwordMatch) {
//      console.log("login success");
//    }else{
//     console.log("login faild");
//    }
//  }

// bycript.genSalt(16)
//         .then((salt)=> _generateHahs(a,b))
//         .then((newB)=>_fillNewUser(newB))
//         .catch((err)=>_setResponse(err))
//         .finally(()=>_setResponse(res))


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