//Module
var dem = function (arr) {
    return 'Có ' + arr.length + ' phần tử trong mảng';
}

var tinhtong = function (a, b) {
    return `Tổng 2 số là: ${a + b}`;
}

//Khai báo để cho file khác nhận được các phần thực thi
module.exports.dem = dem;
module.exports.tinhtong = tinhtong;

//Có tổng cộng 4 cách để khai báo module.exports
// C1 - Khai báo gán được cho 1 phần thực thi duy nhất:
// module.exports = dem;
// C2 - Khai báo khi có 2 phần thực thi trở lên(Khi bên kia gọi giống C# khi muốn gọi đến 1 biến nào đó):
// module.exports.dem = dem;
// module.exports.tinhtong = tinhtong;
// C3 - Khai báo thẳng không dùng var:
// module.exports.dem = function (arr) {
//     return 'Có ' + arr.length + ' phần tử trong mảng';
// }
// C4 - Khai báo gộp(Cách gọi nhu C2):
// module.exports = {
//     dem: dem,
//     tinhtong: tinhtong
// }
