
const gameData = require("../data/games.json")


 function getAll(_req, res) {
    console.log("GET All games request received");
    res.status(200).json(gameData);
    }

 function getRequestParams(req, res) {
    console.log("Post request received");
    const pathParam = parseInt(req.params.firstNum)
    const queryString = parseInt(req.query.secondNum)
    console.log(pathParam*queryString);
    res.status(200).json(pathParam*queryString);
    }

module.exports = {
    getAll,
    getRequestParams
}