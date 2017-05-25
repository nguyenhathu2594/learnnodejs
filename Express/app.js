var express = require("express");

var app = express();
var port = 3000;

app.get("/",function(req,res){ //request và respon
    res.send("<h1>Hello đồng chí</h1>");//respon trả về cho người dùng(Test)
});

app.get("/api",function(req,res){ //Trả về json cho người dùng
    res.json({
        ho: "Nguyễn Hà",
        ten: "Thu"
    });
})

app.listen(port, function () {
    console.log("Server đang được mở ở Port: " + port);
});