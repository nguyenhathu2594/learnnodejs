//Event Emitter
//Thằng này giống kiểu: Khi bị có việc ới 1 cái => Sẽ có những "người" lắng nghe và trả về kết quả, tùy theo phương thức mình đặt

//Khai báo + Khởi tạo
let goi = require("events");
let goianhem = new goi.EventEmitter();

//Khái báo 1 "người" lắng nghe(Kiểu danh bạ) - Cấu trúc x.addListener("Lời gọi",Phương thức xử lý)
let onga = goianhem.addListener("Cuutao", function () {
    console.log("Kệ mày");
})

let ongb = goianhem.addListener("Cuutao", function () {
    console.log("Đợi tí anh đến đây");
})

//Xóa 1 thằng mà éo giúp mình
goianhem.removeListener(onga);

//Lời gọi(Emit)
goianhem.emit("Cuutao");

