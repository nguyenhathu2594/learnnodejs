//Học về Middleware(Tầng thao tác nằm giữa)
var express = require("express");
var app = express();
var port = 3000;
//Sử dụng 1 middleware thao tác lấy file mặc định trong express
app.use("/assets", express.static(__dirname + "/public")); //Khai báo thư mục có thể truy cập được

app.get("/",function(req,res){
    res.send(`
    <link href="/assets/style.css" rel="stylesheet" type="text/css">
    <h1>Hello anh em</h1>
    `);
});

app.listen(port, function () {
    console.log("Server đang chạy ở cổng: " + port);
})