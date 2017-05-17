//Học về pipe trong stream và buffer(Học sao chép)

var fs = require("fs");
var zlib = require("zlib");

var readable = fs.createReadStream(__dirname + "/read.txt",{
    encoding: "utf8", // Encode là gì?
    highWaterMark: 10 * 1024 // Chia nhỏ file (ở đây là 10kb)
});

var writeable = fs.createWriteStream(__dirname + "/read2.txt");
var zip = fs.createWriteStream(__dirname + "/read2.txt.gz");
//Pipe truyền (Có thể lồng nhiều pipe để xử lý dữ liệu lớn(chưa tìm hiểu)) - Copy
readable.pipe(writeable);

var gzip = zlib.createGzip(); //Khởi tạo zip file
//Ở pipe đầu tiên sẽ đọc từng phần sau đó tiến hành nén file lại thành 1 file zip
//Ở pipe thứ 2 trả về lại cho người dùng 1 file đã zip hoàn thành
readable.pipe(gzip).pipe(zip);