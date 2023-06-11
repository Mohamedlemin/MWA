

const jobModel =require("../models/jobSearcch").getJob()


const getAll = function (req,res) {
    jobModel.find().then(
        (jobs)=>{  
             console.log(jobs)
            res.status(200).json(jobs)
        }

    ).catch((err)=>{
        console.log("err :",err);
    })
}

const getOne = function (req,res) {
    const jobId = req.params.id

    jobModel.findById(jobId).then(
        (jobs)=>{  
             console.log(jobs)
            res.status(200).json(jobs)
        }

    ).catch((err)=>{
        console.log("err :",err);
    })
}

const deleteOne = function (req,res) {
    const jobId = req.params.id

    jobModel.findByIdAndDelete(jobId).then(
        (jobs)=>{  
             console.log(jobs)
            res.status(200).json(jobs)
        }

    ).catch((err)=>{
        console.log("err :",err);
    })
}

const create  =function (req,res) {
    const job = req.body
    jobModel.create(
        job
    ).then((createdJob)=>{
        res.status(201).json(createdJob)
        console.log(createdJob)
    }
    ).catch((err)=>{
        console.log(err);
    })
}
const update  =function (req,res) {
    const job = req.body
    const jobId = req.params.id


    jobModel.findByIdAndUpdate(jobId
        ,job,{new:true}
    ).then((updatedjob)=>{
        res.status(201).json(updatedjob)
        console.log(updatedjob)
    }
    ).catch((err)=>{
        console.log(err);
    })
}

const updatePatch  =function (req,res) {
    const job = req.body
    const jobId = req.params.id


    jobModel.findByIdAndUpdate(
        jobId,
              { $set: job },
              { new: true },
    ).then((updatedjob)=>{
        res.status(201).json(updatedjob)
        console.log(updatedjob)
    }
    ).catch((err)=>{
        console.log(err);
    })
}


// --------------------------------------------------------

// const update = function (req, res) {
//     const pmplID = req.params.pmplID;
//     const updatedData = req.body;
  
//     jobModel.findByIdAndUpdate(
//       pmplID,
//       updatedData,
//       { new: true },
//       function (err, updatedPMPL) {
//         if (err) {
//           console.error('Error updating PMPL:', err);
//           res.status(500).json({ error: 'Failed to update PMPL' });
//         } else if (!updatedPMPL) {
//           res.status(404).json({ error: 'PMPL not found' });
//         } else {
//           console.log('Updated PMPL:', updatedPMPL);
//           res.status(200).json(updatedPMPL);
//         }
//       }
//     );
//   };

// --------------------------------------------------------

//   const updatePatch= function (req, res) {
//     const pmplID = req.params.pmplID;
//     const updatedData = req.body;
  
//     jobModel.findByIdAndUpdate(
//       pmplID,
//       { $set: updatedData },
//       { new: true },
//       function (err, updatedPMPL) {
//         if (err) {
//           console.error('Error updating PMPL:', err);
//           res.status(500).json({ error: 'Failed to update PMPL' });
//         } else if (!updatedPMPL) {
//           res.status(404).json({ error: 'PMPL not found' });
//         } else {
//           console.log('Updated PMPL:', updatedPMPL);
//           res.status(200).json(updatedPMPL);
//         }
//       }
//     );
//   };



// JOB.getJob().create({
//     title:"String", 
//     salary:3000, 
//      description:"String",
//      experience:"String", 
//      skills:["String"], 
//     postDate:"String",
//     location:{
//         cordinate : [12,22]
//     }
// }).then((res)=>
//     console.log("it work",res)
// ).catch((err)=>
//     console.log("not working",err)
// )



module.exports = {
   getAll,
   create,
   update,
   updatePatch,
   getOne,
   deleteOne
}