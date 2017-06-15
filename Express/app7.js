//Đang sử dụng cấu trúc như Express Generator(Bóc tách các API ra các Controller xử lý nghiệp vụ giống MVC)
var express = require("express");
var bodyParser = require("body-parser");
//Required tới các controller trong Controller
var apiController = require("./controllers/apiController");
var homeController = require("./controllers/homeController");

var app = express();
var port = 3000;
//Thiết lập view-engine
app.set("view engine", "ejs");
//Trước khi khởi tạo, cấu hình app để nhận được các API trong Controller
apiController(app);
homeController(app);

app.listen(port, function () {
    console.log("Server đang được mở ở Port: " + port);
});