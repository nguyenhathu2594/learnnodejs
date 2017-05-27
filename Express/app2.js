//Định tuyến trong Express
var express = require("express");
var app = express();
var port = 3000;
app.get("/",function(req,res){
    res.send("<h1>Hello</h1>");
});
//Định tuyến theo parameter(Đến trang này với tham số này thì trả về cái gì)
app.get("/user/:id", function (req, res) {
    res.send(`<h1>User: ${req.params.id} </h1>`);
});

app.listen(port, function () {
    console.log("Server đang ở cổng: " + port);
})
