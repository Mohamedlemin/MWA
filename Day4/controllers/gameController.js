const dbconection  = require("../data/dbconection");
const  callbackify = require("util").callbackify


const getAllGamesWithCallBack = callbackify(function (offset) {
    return dbconection.getConnection()
                        .collection("games")
                        .find()
                        .skip(offset)
                        .limit(10)
                        .toArray();

})

 function getAll(req, res) {
    let offset = 0;
    let count = 4;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset,10)
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count,10)
    }
    getAllGamesWithCallBack(offset,count,function(err,data) {
         if (err) {
            console.log(err);
         }
         console.log("done");
         res.status(200).json(data);
    });

   
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