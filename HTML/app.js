var fs = require("fs");
var http = require("http");

var server = http.createServer(function(req,res){
    console.log('Url Req: '+req.url);
    res.writeHead(200,{'Content-Type':'text/html'});
    var readStream = fs.createReadStream(__dirname + "/index.html",'utf8');
    var name = "Bạn";
    readStream = readStream.replace("{name}",name);
    readStream.pipe(res); // Đọc bất đồng bộ
});

server.listen(3000,"localhost");
console.log("Server chay o cong 3000");