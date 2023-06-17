const mongoose = require("mongoose");
const pmpl = mongoose.model(process.env.PMPL_MODEL);
const responseHandler = require("../util/handleResponse");

const errorMessageFailedRetrive =
  process.env.FailedRetrive || "Failed to retrieve PMPLs";
const errorMessageNotFound = process.env.notFound || "PMPL not found";
const errorMessageFailedtoDelete =
  process.env.notFound || "Error deleting PMPL:";
const offsetErrorMessage =
  process.env.OFFSET_ERROR_MESSAGE || "Invalid offset or count value";
const countErrorMessage =
  process.env.COUNT_ERROR_MESSAGE || "Invalid count value";


const succsessStatus200 = parseInt(process.env.RESPONSE_STATUS_200) || 200;
const succsessStatus201 = process.env.RESPONSE_STATUS_201 || 201;
const max_count = parseInt(process.env.MAX_COUNT_VALUE) || 11;

const errorStatus500 = parseInt(process.env.ERROR_STATUS_500) || 500;
const errorStatus400 = parseInt(process.env.ERROR_STATUS_400) || 400;
const errorStatus404 = parseInt(process.env.ERROR_STATUS_404) || 400;


// --------------------------get All ------------------------------
// const getAll = function (req, res) {
//   let offset = 0;
//   let count = 10;
//   if (req.query && req.query.offset) {
//     offset = parseInt(req.query.offset, 10);
//     if (isNaN(offset) || offset < 0) {
//       return res.status(400).json({ error: "Invalid offset value" });
//     }
//   }
//   if (req.query && req.query.count) {
//     count = parseInt(req.query.count, 10);
//     if (isNaN(count) || count < 1) {
//       return res.status(400).json({ error: "Invalid count value" });
//     }
//   }
//   pmpl
//     .find()
//     .skip(offset)
//     .limit(count).then((pmpls)=>_handleSuccess(pmpls,response))

//     .exec(function (err, pmpls) {
//       if (err) {
//         console.error("Error retrieving PMPLs:", err);
//         return res.status(500).json({ error: "Failed to retrieve PMPLs" });
//       }
//       console.log("Found PMPLs:", pmpls.length);
//       return res.json(pmpls);
//     });
// };

const getAll = function (req, res) {
  console.log("get all called ");

  const offset = parseInt(req.query.offset,10) || 0;
  const count = parseInt(req.query.offset,10) || 0;

  if (!_checkOffsetValue(offset, res) || !_checkCountValue(count, res)) {
    return;
  }

  const query = pmpl.find().skip(offset).limit(count);

  query
    .exec()
    .then((pmpls) => responseHandler.setResponse(pmpls, succsessStatus200))
    .catch((err) => responseHandler.setResponse(err, errorStatus500))
    .finally(() => responseHandler.sendResponse(res));
};

function _checkOffsetValue(offset, res) {
  if (isNaN(offset) || offset < 0) {
    console.log(offset);
    responseHandler.setResponse(offsetErrorMessage, errorStatus500);
    responseHandler.sendResponse(res);
    return false;
  }
  return true;
}

function _checkCountValue(count, res) {
  if (isNaN(count) || count < 0 || count > max_count) {
   
    responseHandler.setResponse(countErrorMessage, errorStatus500);
    responseHandler.sendResponse(res);
    return false;
  }
  return true;
}

// --------------------------------------------------------

// const addOne = function (req,res) {
//     const { title, prize, region, teams } = req.body;

//     const newPMPL = new pmpl({
//         title,
//         prize,
//         region,
//         teams
//       });

//     console.log(newPMPL)

//     pmpl.create(newPMPL,function (err,resp) {
//         const response = {status : 201 ,message : resp }
//         if (err) {
//             console.log(err);
//             response.status(500)
//             response.message = err
//         }
//         res.status(response.status).json(response.message)
//     });
// }

const addOne = function (req, res) {
  const { title, prize, region, teams } = req.body;
  
  const newPMPL = new pmpl({
    title,
    prize,
    region,
    teams,
  });

  pmpl
    .create(newPMPL)
    .then((createdPMPL) =>responseHandler.setResponse(createdPMPL, succsessStatus200))
    .catch((err) => responseHandler.setResponse(err, errorStatus400))
    .finally(() => responseHandler.sendResponse(res));
};

// --------------------------------------------------------

// ----------------------Full update ----------------------------------

// const FullupdatePMPL = function (req, res) {
//   const pmplID = req.params.pmplID;
//   const updatedData = req.body;

//   pmpl.findByIdAndUpdate(
//     pmplID,
//     updatedData,
//     { new: true },
//     function (err, updatedPMPL) {
//       if (err) {
//         console.error("Error updating PMPL:", err);
//         res.status(500).json({ error: "Failed to update PMPL" });
//       } else if (!updatedPMPL) {
//         res.status(404).json({ error: "PMPL not found" });
//       } else {
//         console.log("Updated PMPL:", updatedPMPL);
//         res.status(200).json(updatedPMPL);
//       }
//     }
//   );
// };

const FullupdatePMPL = function (req, res) {
  const pmplID = req.params.pmplID;
  const updatedData = req.body;

  pmpl
    .findByIdAndUpdate(pmplID, updatedData, { new: true })
    .then((updatedPMPL) => _handleNotFoundResponse(updatedPMPL))
    .catch((err) => responseHandler.setResponse(err, errorStatus500))
    .finally(() => responseHandler.sendResponse(res));
};

function _handleNotFoundResponse(updatedPMPL) {
  if (!updatedPMPL) {
    responseHandler.setResponse(errorMessageNotFound, errorStatus404);
  } else {
    responseHandler.setResponse(updatedPMPL, succsessStatus200);
  }
}

// ---------------------- Patch update ----------------------------------

const patchUpdate = function (req, res) {
  const pmplID = req.params.pmplID;
  const updatedData = req.body;

  pmpl
    .findByIdAndUpdate(pmplID, { $set: updatedData }, { new: true })
    .then((updatedPMPL) => _handleNotFoundResponse(updatedPMPL))
    .catch((err) => responseHandler.setResponse(err, errorStatus500))
    .finally(() => responseHandler.sendResponse(res));
};

// --------------------------------------------------------

const deletePMPL = function (req, res) {
  const pmplID = req.params.pmplID;

  pmpl.findByIdAndRemove(pmplID)
      .then((deletedPMPL) => _handleNotFoundResponse(deletedPMPL))
      .catch((err) => responseHandler.setResponse(err, errorStatus500))
      .finally(() => responseHandler.sendResponse(res));
   
};

const getOne = function (req, res) {
  const pmplID = req.params.pmplID;

  pmpl.findById(pmplID)
      .then((foundPmpl) => _handleNotFoundResponse(foundPmpl))
      .catch((err) => responseHandler.setResponse(err, errorStatus500))
      .finally(() => responseHandler.sendResponse(res));
   
};

module.exports = {
  getAll,
  getOne,
  addOne,
  FullupdatePMPL,
  patchUpdate,
  deletePMPL,
};
