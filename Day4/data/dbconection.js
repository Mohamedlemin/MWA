const mongodbClient = require("mongodb").MongoClient;
const  callbackify = require("util").callbackify

const mongodbConnectionWithCallBack = callbackify(function(url) {
    return mongodbClient.connect(url);
});

let _connection = null;

const open = function () {
    console.log("open called");
    if (null === getConnection()) {
        console.log("get != null");
        console.log(process.env.DB_URL);
        mongodbConnectionWithCallBack("mongodb://127.0.0.1:27017",function (err,client) {
            if (err) {
                console.log("dB connection faild");
                return
            }
            _connection = client.db(process.env.DB_NAME);
            console.log("connected with "+ process.env.DB_NAME);

        })
    }
}
const getConnection = function() {
        return _connection;
    }

    module.exports = {
        open,
        getConnection
    }
    
