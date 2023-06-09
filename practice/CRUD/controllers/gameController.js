const mongoose = require("mongoose")
const Game = mongoose.model("Game")

function getAllGames(req,res) {
    let offset = 0;
    let count = 5
   console.log("get all called");
   if (req.query && req.query.offset) {
       offset = req.query.offset
   }
   if (req.query && req.query.count) {
       count = req.query.count
   }
   Game.find()
        .skip(offset)
        .limit(count)
        .then((games)=>{
            console.log(games);
            res.status(200).json(games)
        }).catch((err)=>{
            res.status(500).json("err: ",err)
        })
    }
function getOne(req,res) {
   console.log("get one called");
   const gameId = req.params.id
   Game.findById(gameId)
        .then((game)=>{
            console.log(game);
            res.status(200).json(game)
        }).catch((err)=>{
            res.status(500).json("err: ",err)
        })
    }

function create(req,res) {
   console.log("create game is called");
   const newGame = {
     title : req.body.title,
     year : req.body.year,
     rate : req.body.rate,
     price : req.body.price,
   }
   Game.create(newGame)
        .then((createdGame)=>{
            console.log(createdGame);
            res.status(200).json(createdGame)
        }).catch((err)=>{
            res.status(500).json("err: ",err)
        })
    }
function update(req,res) {
   console.log("update game is called");
   const gameId = new  mongoose.Types.ObjectId(req.params.id);
   const newGame = {
     title : req.body.title,
     year : req.body.year,
     rate : req.body.rate,
     price : req.body.price,
   }
   Game.findOneAndUpdate({'_id':gameId},newGame,{new : true})
        .then((createdGame)=>{
            console.log(createdGame);
            res.status(200).json(createdGame)
        }).catch((err)=>{
            res.status(500).json(err)
            console.log(err);
        })
    }


function removeGame(req,res) {
   console.log("get all called");
   const gameId = req.body.id
   Game.deleteOne(gameId)
        .then((msg)=>{
            console.log(msg);
            res.status(200).json(msg)
        }).catch((err)=>{
            res.status(500).json("err: ",err)
        })
    }

module.exports={
    getAllGames,
    getOne,
    create,
    removeGame,
    update
} 