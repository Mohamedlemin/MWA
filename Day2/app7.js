console.log("1 : App start")

const http = require("http")
const fs = require("fs")


const helloWord = function (req,res) {
    res.writeHead(200);
    res.end("Hello world!")
    
}
const serverIndexFile = function (req,res) {
    fs.readFile("index.html",function(err,buffer){
        res.setHeader("Content-Type","text/html")
        res.writeHead(200);
        

    })

    // const buffer  = fs.readFile("index.html")
    // res.setHeader("Content-Type","text/html")
    // res.writeHead(200);
    // res.end(buffer)
    
}
const helloWordjson = function (req,res) {
    res.setHeader("Content-Type","application/json")
    res.writeHead(200);
    res.end("Hello world!")
    
}
const server = http.createServer(serverIndexFile);
server.listen(8080,"localhost",function() {
    console.log("2 : listen to port 8080")
})

console.log("3 : App end")
