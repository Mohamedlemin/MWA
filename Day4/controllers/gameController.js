const dbconection  = require("../data/dbconection");
const  callbackify = require("util").callbackify


const getAllGamesWithCallBack = callbackify(function (offset) {
    return dbconection.getConnection()
                        .collection(process.env.GAMES)
                        .find()
                        .skip(offset)
                        .limit(10)
                        .toArray();

})

const createGameWithCallBack = callbackify(function (data) {
    return dbconection.getConnection()
                        .collection(process.env.GAMES)
                        .insertOne(data)
})

const deleteGameWithCallBack = callbackify(function (gameID) {
    return dbconection.getConnection()
    .collection(process.env.GAMES)
    .deleteOne(gameID)
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

 function createGame(req, res) {
    let newGame = {}
    if (req.body && req.body.title
        && req.body.price &&
        req.body.minAge  && 
        req.body.minPlayers) {

       newGame.title =   req.body.title
       newGame.price =   parseFloat(req.body.price)

       const minAge = parseInt(req.body.minAge)
       if (minAge >= 7 && minAge <= 99) {
        newGame.minAge = minAge
       }else {
        res.status(500)
        res.json("min Age must be between 7 and 9")
       }
       const minPlayers=parseInt(req.body.minPlayers)
       if (minPlayers>=1 && minPlayers <= 10) {
        newGame.minPlayers = minPlayers
       }else {
        res.status(500)
        res.json("min players number must be between 1 and 10")
       } 

        createGameWithCallBack(newGame,function (err,acknowledged) {
            if (err) {
                res.status(500).json("error : "+ err)
            }
            res.status(200).json("inserted ID " + acknowledged.insertedId)
        })

        }else{
            res.status(500)
            res.json("title,minAge,minPlayers or price is missing")
        }

    }


 function deleteGame(req,res) {
    let gameObjectID = {}
    const gameID = req.params.gameID;
    gameObjectID._id=gameID

    console.log(gameID)
    console.log(gameObjectID)
    deleteGameWithCallBack(gameObjectID,function (err,acknowledged) {
        if(err){
            res.status(500)
            res.json("check the game ID")
        }
        res.status(200)
        res.json(acknowledged)
    })
        
    }

module.exports = {
    getAll,
    createGame,
    deleteGame
}