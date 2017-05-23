//Trả về Json
var fs = require("fs");
var http = require("http");

var server = http.createServer(function(req,res){
    console.log('Url Req: '+req.url);
    res.writeHead(200,{'Content-Type':'application/json'});
    var obj = {
        ho: "Nguyễn Hà",
        ten: "Thu"
    }
    res.end(JSON.stringify(obj));
});

server.listen(3000,"localhost");
console.log("Server chay o cong 3000");