//Học vể Server
var http = require('http');

//Khởi tạo server
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello anh em');
}).listen(3000,'localhost');
console.log('Máy chủ đang chạy ở cổng 3000');