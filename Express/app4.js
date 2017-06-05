//Template
var express = require("express");
var app = express();
var port = 3000;
//Thiết lập view-engine
app.set("view engine", "ejs");

//Truy cập trang tĩnh
app.get("/", function (req, res) {
    res.render("index");
});

//Truy cập trang động
app.get("/user/:id", function (req, res) {
    res.render("user", { ID: req.params.username })
});

app.listen(port, function () {
    console.log("Server đang chạy ở cổng: " + port)
});