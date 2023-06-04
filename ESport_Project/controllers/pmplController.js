const mongoose = require("mongoose")
const pmpl = mongoose.model(process.env.PMPL_MODEL)

const getAll = function(req,res) {
    let offset = 0;
    let count = 10;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset,10);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count,10);
    }
    pmpl.find().skip(offset).limit(count).exec(function(err,pmpls){
        console.log("found pmpls : "+pmpl.length);
        res.json(pmpls);
    })
}

const addOne = function (req,res) {
    const { title, prize, region, teams } = req.body;

    const newPMPL = new pmpl({
        title,
        prize,
        region,
        teams
      });

    console.log(newPMPL)

    pmpl.create(newPMPL,function (err,resp) {
        const response = {status : 201 ,message : resp }
        if (err) {
            console.log(err);
            response.status(500)
            response.message = err
        }
        res.status(response.status).json(response.message)
    });
}

const deletePMPL = function (req, res) {
    const pmplID = req.params.pmplID;
  
    pmpl.findByIdAndRemove(pmplID, function (err, deletedPMPL) {
      if (err) {
        console.error('Error deleting PMPL:', err);
        res.status(500).json({ error: 'Failed to delete PMPL' });
      } else if (!deletedPMPL) {
        res.status(404).json({ error: 'PMPL not found' });
      } else {
        console.log('Deleted PMPL:', deletedPMPL);
        res.status(200).json({ message: 'PMPL deleted successfully' });
      }
    });
  };

module.exports = {
    getAll,
    addOne,
    deletePMPL
}