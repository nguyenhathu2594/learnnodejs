//Học về QueryString và Post Parameters
var express = require("express");
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });
// create application/json parser
var jsonParser = bodyParser.json();

var app = express();
var port = 3000;
//Thiết lập view-engine
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("login");
});

app.get("/api", function (req, res) { //Trả về json cho người dùng
    res.json({
        ho: "Nguyễn Hà",
        ten: "Thu"
    });
});

app.get("/user/:id", function (req, res) {
    //Đọc tham số được truyền về
    res.render("user", { ID: req.params.id, queryString: req.query.qstr });
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

app.listen(port, function () {
    console.log("Server đang được mở ở Port: " + port);
});