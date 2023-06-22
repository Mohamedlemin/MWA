const mongoose = require("mongoose");
const pmpl = mongoose.model(process.env.PMPL_MODEL);
const responseHandler = require("../util/handleResponse");

const errorMessageFailedRetrive = process.env.FailedRetrive;
const errorMessageNotFound = process.env.notFound;
const errorMessageFailedtoDelete = process.env.notFound;
const offsetErrorMessage = process.env.OFFSET_ERROR_MESSAGE;
const countErrorMessage = process.env.COUNT_ERROR_MESSAGE;
const succsessStatus200 = parseInt(process.env.RESPONSE_STATUS_200);
const succsessStatus201 = process.env.RESPONSE_STATUS_201;
const max_count = parseInt(process.env.MAX_COUNT_VALUE);
const errorStatus500 = parseInt(process.env.ERROR_STATUS_500);
const errorStatus400 = parseInt(process.env.ERROR_STATUS_400);
const errorStatus404 = parseInt(process.env.ERROR_STATUS_404);


// --------------------------get All ------------------------------

const getAll = function (req, res) {
  console.log("get all called ");

  const offset = parseInt(req.query.offset, parseInt(process.env.TEN)) || parseInt(process.env.DEFAULT_OFFSET);
  const count = parseInt(req.query.count, parseInt(process.env.TEN)) || parseInt(process.env.DEFAULT_COUNT);

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



// --------------------------------------------------------


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
    .then((createdPMPL) => responseHandler.setResponse(createdPMPL, succsessStatus200))
    .catch((err) => responseHandler.setResponse(err, errorStatus400))
    .finally(() => responseHandler.sendResponse(res));
};


// ----------------------Full update ----------------------------------

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

// ----------------------delete one ----------------------------------

const deletePMPL = function (req, res) {
  const pmplID = req.params.pmplID;

  pmpl.findByIdAndRemove(pmplID)
    .then((deletedPMPL) => _handleNotFoundResponse(deletedPMPL))
    .catch((err) => responseHandler.setResponse(err, errorStatus500))
    .finally(() => responseHandler.sendResponse(res));

};
// ----------------------get one ----------------------------------

const getOne = function (req, res) {
  const pmplID = req.params.pmplID;

  pmpl.findById(pmplID)
    .then((foundPmpl) => _handleNotFoundResponse(foundPmpl))
    .catch((err) => responseHandler.setResponse(err, errorStatus500))
    .finally(() => responseHandler.sendResponse(res));

};

// ----------------------Private ----------------------------------

function _checkOffsetValue(offset, res) {
  if (isNaN(offset) || offset < parseInt(process.env.ZERO)) {
    console.log(offset);
    responseHandler.setResponse(offsetErrorMessage, errorStatus500);
    responseHandler.sendResponse(res);
    return false;
  }
  return true;
}

function _checkCountValue(count, res) {
  if (isNaN(count) || count < parseInt(process.env.ZERO) || count > max_count) {

    responseHandler.setResponse(countErrorMessage, errorStatus500);
    responseHandler.sendResponse(res);
    return false;
  }
  return true;
}

module.exports = {
  getAll,
  getOne,
  addOne,
  FullupdatePMPL,
  patchUpdate,
  deletePMPL,
};