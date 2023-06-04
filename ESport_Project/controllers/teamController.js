const mongoose = require("mongoose")
const pmpl = mongoose.model(process.env.PMPL_MODEL)
// const team = mongoose.model(process.env.TEAM_COLLECTION)
const teamCollection = process.env.TEAM_COLLECTION

const getTeams = function(req,res){
    const pmplID = req.params.pmplID;
    pmpl.findById(pmplID)
    .select(teamCollection).exec(function (err,pmpl) {
      console.log(pmpl.teams);
      res.status(200).json(pmpl.teams)
    })
  
  }

  const getOneTeam = function (req, res) {
    const pmplID = req.params.pmplID;
    const teamID = req.params.teamID;
    pmpl.findById(pmplID)
      .select('teams')
      .exec(function (err, pmpl) {
        const team = pmpl.teams.find(t => t._id.toString() === teamID);
        if (team) {
          console.log(team);
          res.status(200).json(team);
        } else {
          res.status(404).json({ error: 'Team not found' });
        }
      });
  };
  
  
  

  // const addOneTeam = function(req, res)  {
  //     const pmplID = req.params.pmplID;
  //     const { players } = req.body;

  //     if (!Array.isArray(players)) {
  //       res.status(400).json({ error: 'Invalid players data' });
  //       return;
  //     }
    
    
  //     const newPlayers = players.map(player => ({
  //       name: player.name,
  //       country: player.country,
  //       role: player.role
  //     }));
    
  //     const newTeam = {
  //       name : req.body.name,
  //       country:req.body.country,
  //       Best_Moment_clip:req.body.Best_Moment_clip,
  //       Description_clip:req.body.Description_clip,
  //       players: newPlayers
  //     };
    
  //     pmpl.teams.create(function (error, savedTeam) {
  //       if (error) {
  //         console.error('Error creating team:', error);
  //         res.status(500).json({ error: 'Failed to create team within PMPL' });
  //       } else {
  //         pmpl.findByIdAndUpdate(
  //           pmplID,
  //           { $push: { teams: savedTeam._id } },
  //           { new: true },
  //           function (error, updatedPMPL) {
  //             if (error) {
  //               console.error('Error updating PMPL:', error);
  //               res.status(500).json({ error: 'Failed to update PMPL with new team' });
  //             } else {
  //               console.log('New team created within PMPL:', updatedPMPL);
  //               res.status(201).json(updatedPMPL);
  //             }
  //           }
  //         );
  //       }
  //     });
  //   }



    const addOneTeam= function(req, res) {
      console.log("Add One Team Controller");
      const pmplId= req.params.pmplID;
      pmpl.findById(pmplId).select("teams").exec(function(err, pmpl) {
      console.log("Found pmpl ", pmpl);
      const response= { status: 200, message: pmpl };
      if (err) {
      console.log("Error finding pmpl");
      response.status= 500;
      response.message= err;
      } else if (!pmpl) {
      console.log("Error finding pmpl");
      response.status= 404;
      response.message= {"message": "pmpl ID not found "+pmplId};
      }
      if (pmpl) {
      _addTeam(req, res, pmpl);
      } else {
      res.status(response.status).json(response.message);
      }
      });
      }

      const _addTeam= function (req, res, pmpl) {
              const { players } = req.body;

        if (!Array.isArray(players)) {
          res.status(400).json({ error: 'Invalid players data' });
          return;
        }
    
        const newPlayers = players.map(player => ({
          name: player.name,
          country: player.country,
          role: player.role
        }));
        pmpl.teams.name= req.body.name;
        pmpl.teams.country= req.body.country;
        pmpl.teams.Best_Moment_clip= req.body.Best_Moment_clip;
        pmpl.teams.Description_clip= req.body.Description_clip;
        pmpl.teams.players = newPlayers
        pmpl.save(function(err, updatedpmpl) {
        const response= { status: 200, message: [] };
        if (err) {
        response.status= 500;
        response.message= err;
        } else {
        response.status= 201;
        response.message= updatedpmpl.teams;
        }
        res.status(response.status).json(response.message);
        });
        }


        


  
module.exports = {
  getTeams,
  getOneTeam,
  addOneTeam
}