//Định tuyến
var fs = require("fs");
var http = require("http");

var server = http.createServer(function (req, res) {
    if (req.url === "/" || req.url === "/index.html") { //Kiểm tra url nếu thỏa mãn điều kiện thì trả về web tương ứng
        var read = fs.createReadStream(__dirname + "/index.html", 'utf8').pipe(res);
    } else if (req.url === "/api") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var obj = {
            ho: "Nguyễn Hà",
            ten: "Thu"
        }
        res.end(JSON.stringify(obj));
    } else { //Không tìm thấy web yêu cầu trả về mã lỗi
        res.writeHead(404);
        res.end("Không tìm thấy trang",'utf8');
    }

}).listen(3000, "localhost", function () {
    console.log("Server chay o cong 3000");
});
