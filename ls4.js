//Đọc ghi file
var fs = require('fs');

//Đồng bộ

//Đọc file đồng bộ(Chỉ thực hiện lệnh tiếp theo sau khi đọc xong file)
var read = fs.readFileSync('test.txt','utf8');
console.log(read);

//Ghi file đồng bộ
var write = fs.writeFileSync('test2.txt',read,'utf8');
console.log(fs.readFileSync('test2.txt','utf8'));

//Bất đồng bộ(Non-Blocking): Xử lý các tác vụ khác trước sau đó xong thì hiển thị lại(readFile & writeFile)

fs.readFile('test.txt','utf8',function(err,data){
    console.log(data);
});

console.log('Hiện trước nè');