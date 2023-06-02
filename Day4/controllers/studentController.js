const studentData = require("../data/student.json")

function getAll(req,res) {
   res.status(200).json(studentData)
}

function getOne(req,res) {
    studentIndex = parseInt(req.params.index) - 1
    res.status(200).json(studentData[studentIndex])
    
}


module.exports ={
    getAll,
    getOne
}