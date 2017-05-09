//Tạo và xóa thư mục
var fs = require('fs');

//Tạo/Xóa thư mục đồng bộ
fs.mkdirSync('test'); //Tạo
fs.rmdirSync('test'); //Xóa

//Tạo/xóa thư mục bất đồng bộ
//Tạo thư mục + thêm file
fs.mkdir('test', function () {
    fs.readFile('test.txt', 'utf8', function (err, data) { //Khởi tạo đọc file trả về err(Lỗi) - data(dữ liệu đọc được)
        fs.writeFile('./test/test2.txt', data, 'utf8'); //Khai báo tên file(Chứa đường dẫn thư mục để đưa file vào thư mục luôn)
    });
});

//Xóa thư mục(Nếu thư mục có dữ liệu không thể xóa ngay mà phải sử dụng unlink để xóa)
fs.unlink('./test/test2.txt', function () {
    fs.rmdir('test');
});
