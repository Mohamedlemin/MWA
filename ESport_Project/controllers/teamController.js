const mongoose = require("mongoose");
const pmpl = mongoose.model(process.env.PMPL_MODEL);
const responseHandler = require("../util/handleResponse");
const succsessStatus200 = parseInt(process.env.RESPONSE_STATUS_200) || 200;
const errorStatus500 = parseInt(process.env.ERROR_STATUS_500) || 500;
const errorStatus400 = parseInt(process.env.ERROR_STATUS_400) || 400;
const errorStatus404 = parseInt(process.env.ERROR_STATUS_404) || 404;

const teamCollection = process.env.TEAM_COLLECTION;

// --------------------------------------------------------

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

  // .then((createdPMPL) =>responseHandler.setResponse(createdPMPL, succsessStatus200))
  // .catch((err) => responseHandler.setResponse(err, errorStatus400))
  // .finally(() => responseHandler.sendResponse(res));
  // .exec(function (err,pmpl) {
  //   if (err) {
  //     console.error('Error retrieving teams:', err);
  //     return res.status(500).json({ error: 'Failed to retrieve teams' });
  //   }
  //   if (!pmpl) {
  //     return res.status(404).json({ error: 'PMPL not found' });
  //   }
  //   console.log('Teams retrieved:', pmpl.teams);

  //   return res.status(200).json(pmpl.teams);
  // });
};
// --------------------------------------------------------

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
  // .exec(function (err, pmpl) {
  //   const team = pmpl.teams.find(t => t._id.toString() === teamID);
  //   if (team) {
  //     console.log(team);
  //     res.status(200).json(team);
  //   } else {
  //     res.status(404).json({ error: 'Team not found' });
  //   }
  // });
};

function _findTeam(pmpl, teamID) {
  return pmpl.teams.find((t) => t._id.toString() === teamID);
}

// --------------------------------------------------------

const addOneTeam = function (req, res) {
  console.log("Add One Team Controller");
  const pmplId = req.params.pmplID;
  pmpl
    .findById(pmplId)
    .select("teams")
    .then((pmpl) => _addTeam(req, pmpl))
    .then((updaedPMPL) => responseHandler.setResponse(updaedPMPL))
    .catch((err) => responseHandler.setResponse(err, errorStatus400))
    .finally(() => responseHandler.sendResponse(res));

  //     .exec(function(err, pmpl) {
  //     console.log("Found pmpl ", pmpl);
  //     const response= { status: 200, message: pmpl };
  //     if (err) {
  //         console.log("Error finding pmpl");
  //         response.status= 500;
  //         response.message= err;
  //     } else if (!pmpl) {
  //         console.log("Error finding pmpl");
  //         response.status= 404;
  //         response.message= {"message": "pmpl ID not found "+pmplId};
  //     }
  //     if (pmpl) {
  //       _addTeam(req, res, pmpl);
  //     } else {
  //       res.status(response.status).json(response.message);
  //     }
  // });
};
// --------------------------------------------------------

const _addTeam = function (req, pmpl) {
  const { players } = req.body;
  const newPlayers = players.map((player) => ({
    name: player.name,
    country: player.country,
    role: player.role,
  }));
  pmpl.teams.name = req.body.name;
  pmpl.teams.country = req.body.country;
  pmpl.teams.Best_Moment_clip = req.body.Best_Moment_clip;
  pmpl.teams.Description_clip = req.body.Description_clip;
  pmpl.teams.players = newPlayers;

  return pmpl.save(newPlayers);
};

//  const _addTeam= function (req, res, pmpl) {
//               const { players } = req.body;
//        if (!Array.isArray(players)) {
//           res.status(400).json({ error: 'Invalid players data' });
//           return;
//         }

//         const newPlayers = players.map(player => ({
//           name: player.name,
//           country: player.country,
//           role: player.role
//         }));
//           pmpl.teams.name= req.body.name;
//           pmpl.teams.country= req.body.country;
//           pmpl.teams.Best_Moment_clip= req.body.Best_Moment_clip;
//           pmpl.teams.Description_clip= req.body.Description_clip;
//           pmpl.teams.players = newPlayers
//         pmpl.save(function(err, updatedpmpl) {
//         const response= { status: 200, message: [] };
//         if (err) {
//           response.status= 500;
//           response.message= err;
//         } else {
//           response.status= 201;
//           response.message= updatedpmpl.teams;
//         }
//            res.status(response.status).json(response.message);
//   });
// }

// --------------------------------------------------------
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
  //   function (err, foundPMPL) {
  //   if (err) {
  //     console.error('Error finding PMPL:', err);
  //     res.status(500).json({ error: 'Failed to update team' });
  //   } else if (!foundPMPL) {
  //     res.status(404).json({ error: 'PMPL not found' });
  //   } else {
  //     const teamToUpdate = foundPMPL.teams.id(teamID);
  //     if (!teamToUpdate) {
  //       res.status(404).json({ error: 'Team not found' });
  //     } else {
  //       teamToUpdate.set(updatedData);
  //       foundPMPL.save(function (err, updatedPMPL) {
  //         if (err) {
  //           console.error('Error updating PMPL:', err);
  //           res.status(500).json({ error: 'Failed to update team' });
  //         } else {
  //           console.log('Updated team:', teamToUpdate);
  //           res.status(200).json(teamToUpdate);
  //         }
  //       });
  //     }
  //   }
  // });
};

function _saveUpdatedTeam(foundPMPL, updatedData, teamID) {
  const teamToUpdate = foundPMPL.teams.id(teamID);
  teamToUpdate.set(updatedData);
  return foundPMPL.save(teamToUpdate);
}

// --------------------------------------------------------

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

//     function (err, foundPMPL) {
//     if (err) {
//       console.error('Error finding PMPL:', err);
//       res.status(500).json({ error: 'Failed to update team' });
//     } else if (!foundPMPL) {
//       res.status(404).json({ error: 'PMPL not found' });
//     } else {
//       const teamToUpdate = foundPMPL.teams.id(teamID);
//       if (!teamToUpdate) {
//         res.status(404).json({ error: 'Team not found' });
//       } else {
//         Object.keys(updatedData).forEach(key => {
//           teamToUpdate[key] = updatedData[key];
//         });
//         foundPMPL.save(function (err, updatedPMPL) {
//           if (err) {
//             console.error('Error updating PMPL:', err);
//             res.status(500).json({ error: 'Failed to update team' });
//           } else {
//             console.log('Updated team:', teamToUpdate);
//             res.status(200).json(teamToUpdate);
//           }
//         });
//       }
//     }
//   });
// };

// --------------------------------------------------------

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

  // function (err, updatedPMPL) {
  //   if (err) {
  //     console.error('Error deleting team:', err);
  //     res.status(500).json({ error: 'Failed to delete team' });
  //   } else if (!updatedPMPL) {
  //     res.status(404).json({ error: 'PMPL not found' });
  //   } else {
  //     console.log('Deleted team:', teamID);
  //     res.status(200).json({ message: 'Team deleted successfully' });
  //   }
  // }
  // );
};

module.exports = {
  getTeams,
  getOneTeam,
  addOneTeam,
  fullupdate,
  patchUpdate,
  deleteTeam,
};
