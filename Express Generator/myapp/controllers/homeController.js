//Điều hướng các trang
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// create application/json parser
var jsonParser = bodyParser.json();


module.exports = function (home) {
    app.get("/", function (req, res) {
        res.render("index");
    });
    //Đọc dữ liệu post từ người dùng gửi lên
    app.post("/login", urlencodedParser, function (req, res) {
        res.send("Xin chào, " + req.body.username);
        console.log(req.body.username);
        console.log(req.body.password);
    });
    //Đọc dữ liệu post từ người dùng gửi lên dưới dạng json
    app.post("/loginjson", jsonParser, function (req, res) {
        res.send("Ok");
        console.log(req.body.ho);
        console.log(req.body.ten);
    })
}