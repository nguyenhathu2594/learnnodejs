//Đang sử dụng cấu trúc như Express Generator(Bóc tách các API ra các Controller xử lý nghiệp vụ giống MVC)
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
//Required tới các controller trong Controller
var apiController = require("./controllers/apiController");
var homeController = require("./controllers/homeController");

var app = express();
var port = 3000;
//Kết nối tới Db
mongoose.connect("mongodb://thunh:runtoyou@ds141242.mlab.com:41242/nodejsthunh");
//Khởi tạo Schema
var Schema = mongoose.Schema;
//Demo Schema(Giống khai báo thuộc tính của các đối tượng trong Model)
var nguoidung = new Schema({
    ho: String,
    ten: String,
    diachi: String
});
//Tạo model
var Nguoidung = mongoose.model("Nguoidung", nguoidung);

//Thiết lập view-engine
app.set("view engine", "ejs");
//Trước khi khởi tạo, cấu hình app để nhận được các API trong Controller
apiController(app);
homeController(app);

//Tạo đối tượng
var thuxeko = Nguoidung({
    ho: "Nguyễn",
    ten: "Hà Thu",
    diachi: "Hà Nội"
});

thuxeko.save(function(err){
    if (err) throw err;
    console.log("Thêm đối tượng thành công");
})

app.listen(port, function () {
    console.log("Server đang được mở ở Port: " + port);
});