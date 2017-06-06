//RestfulAPI(Xử lý các action thêm, sửa, xóa, lấy dữ liệu)
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
    res.render("index3");
});

//Trả về data cho người dùng
app.get("/api/user/:id", function (req, res) {
    //Lấy data từ database
    var ketqua = {
        ho: "Nguyễn Hà",
        ten: "Thu"
    }; //Ví dụ
    res.json(ketqua);
});

app.post("/api/user", jsonParser, function (req, res) {
    //Tạo 1 user mới
});

app.put("/api/user", jsonParser, function (req, res) {
    //update và lưu user vào db
});

app.delete("/api/user/:id",function(req,res){
    //Xóa một user
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