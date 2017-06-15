//Điều hướng các API xử lý
module.exports = function (app) {
    //Trả về data cho người dùng
    app.get("/api/user/:id", function (req, res) {
        //Lấy data từ database
        var ketqua = {
            ho: "Nguyễn Hà",
            ten: "Thu"
        }; //Ví dụ
        res.json(ketqua);
    });

    app.post("/api/user", function (req, res) {
        //Tạo 1 user mới
    });

    app.put("/api/user", function (req, res) {
        //update và lưu user vào db
    });

    app.delete("/api/user/:id", function (req, res) {
        //Xóa một user
    });
}