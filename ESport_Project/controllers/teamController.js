const mongoose = require("mongoose");
const pmpl = mongoose.model(process.env.PMPL_MODEL);
const responseHandler = require("../util/handleResponse");
const succsessStatus200 = parseInt(process.env.RESPONSE_STATUS_200);
const errorStatus500 = parseInt(process.env.ERROR_STATUS_500);
const errorStatus400 = parseInt(process.env.ERROR_STATUS_400);
const errorStatus404 = parseInt(process.env.ERROR_STATUS_404);
const succsessStatus201 = parseInt(process.env.RESPONSE_STATUS_201);

const teamCollection = process.env.TEAM_COLLECTION;

// ---------------------- getTeams ----------------------------------

const getTeams = function (req, res) {
  console.log("get Teams called");
  const pmplID = req.params.pmplID;
  console.log(pmplID);
  pmpl
    .findById(pmplID)
    .select(teamCollection)
    .then((pmpl) => responseHandler.setResponse(pmpl, succsessStatus200))
    .catch((err) => responseHandler.setResponse(err, errorStatus400))
    .finally(() => responseHandler.sendResponse(res));
};
// ------------------------- getOneTeam -------------------------------

const getOneTeam = function (req, res) {
  const pmplID = req.params.pmplID;
  const teamID = req.params.teamID;
  console.log("get on team called");
  console.log(pmplID);
  pmpl
    .findById(pmplID)
    .select("teams")
    .then((pmpl) => _findTeam(pmpl, teamID))
    .then((team) => responseHandler.setResponse(team, succsessStatus200))
    .catch((err) => responseHandler.setResponse(err, errorStatus400))
    .finally(() => responseHandler.sendResponse(res));
};

function _findTeam(pmpl, teamID) {
  return pmpl.teams.find((t) => t._id.toString() === teamID);
}

// --------------------------------------------------------

const addOneTeam = function (req, res) {
  console.log("Add One Team Controller");
  const pmplId = req.params.pmplID;
  const newTeam =req.body
  pmpl
    .findById(pmplId)
    .select("teams")
    .then((pmpl) => _addTeam(pmpl, newTeam))
    .then((updaedPMPL) => responseHandler.setResponse(updaedPMPL,succsessStatus201))
    .catch((err) => responseHandler.setResponse(err, errorStatus400))
    .finally(() => responseHandler.sendResponse(res));
};

const _addTeam = function (pmpl, newTeam) {
  console.log("this is the team ",newTeam);
  pmpl.teams.push(newTeam);
  return pmpl.save();
};


// ----------------------fullupdate----------------------------------
const fullupdate = function (req, res) {
  const pmplID = req.params.pmplID;
  const teamID = req.params.teamID;
  const updatedData = req.body;

  pmpl
    .findById(pmplID)
    .then((foundPMPL) => _saveUpdatedTeam(foundPMPL, updatedData, teamID))
    .then((updatedPMPL) =>
      responseHandler.setResponse(updatedPMPL, succsessStatus200)
    )
    .catch((err) => responseHandler.setResponse(err, errorStatus400))
    .finally(() => responseHandler.sendResponse(res));
 
};

function _saveUpdatedTeam(foundPMPL, updatedData, teamID) {
  const teamToUpdate = foundPMPL.teams.id(teamID);
  teamToUpdate.set(updatedData);
  return foundPMPL.save(teamToUpdate);
}

// ----------------------patchUpdate----------------------------------

const patchUpdate = function (req, res) {
  const pmplID = req.params.pmplID;
  const teamID = req.params.teamID;
  const updatedData = req.body;
  pmpl
    .findById(pmplID)
    .then((foundPMPL) => _patchUpdate(teamID, foundPMPL, updatedData))
    .then((updatedPMPL) =>responseHandler.setResponse(updatedPMPL, succsessStatus200))
    .catch((err) => responseHandler.setResponse(err, errorStatus400))
    .finally(() => responseHandler.sendResponse(res));
};

function _patchUpdate(teamId, foundPMPL, updatedData) {
  const teamToUpdate = foundPMPL.teams.id(teamId);
  Object.keys(updatedData).forEach((key) => {
    teamToUpdate[key] = updatedData[key];
  });
  return foundPMPL.save(teamToUpdate);
}



// ---------------------delete Team-----------------------------------

const deleteTeam = function (req, res) {
  const pmplID = req.params.pmplID;
  const teamID = req.params.teamID;
  pmpl
    .findByIdAndUpdate(
      pmplID,
      { $pull: { teams: { _id: teamID } } },
      { new: true }
    )
    .then((updatedPMPL) =>
      responseHandler.setResponse(updatedPMPL, succsessStatus200)
    )
    .catch((err) => responseHandler.setResponse(err, errorStatus400))
    .finally(() => responseHandler.sendResponse(res));

 
};

module.exports = {
  getTeams,
  getOneTeam,
  addOneTeam,
  fullupdate,
  patchUpdate,
  deleteTeam,
};