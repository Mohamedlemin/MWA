const http = require("http")
const readPath = require("path")
const fs = require("fs")


const serveHtml = function(req,res) {

    if (req.method === 'GET') {
    res.setHeader('Content-Type','text/html')
    res.statusCode=200
    switch (req.url) {
        case "/page1.html":
            fs.readFile(readPath.join("../public",req.url),function (err,buffer) {
                res.end(buffer)
            })
           
            break;
        case "/page2.html":
            fs.readFile(readPath.join("../public",req.url),function (err,buffer) {
                res.end(buffer)
            })
            res.end("<H1>Page 2</H1>")
            break;
        default:
            fs.readFile(readPath.join("../public","index.html"),function (err,buffer) {
                res.end(buffer)
            })
            res.end("<H1>index</H1>")
            break;
    }
}else if(req.method === 'POST'){
    res.setHeader('Content-Type', 'application/json');
    res.end("message : 'json'");

}

    
}

const server = http.createServer(serveHtml)

server.listen(7272,"localhost",function (req,res) {
    console.log("port lisen to "+ server.address().port);
})