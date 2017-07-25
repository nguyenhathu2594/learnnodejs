//Khai báo angular
var app = angular.module("app.todos", ["xeditable"]); //Khai báo phụ thuộc -> [] thư viện nào

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

app.controller("todoController", ['$scope', function ($scope) {
    $scope.appName = "Công việc";
    $scope.formData = {};
    $scope.todos = [
        {
            thongtin: "Khởi tạo dự án",
            isDone: true
        }, {
            thongtin: "Cài đặt angular",
            isDone: true
        }, {
            thongtin: "Kết nối angular vào db",
            isDone: false
        }
        , {
            thongtin: "Upload lên heroku",
            isDone: false
        }
    ];
    $scope.createTodo = function(){
        var todo ={
            thongtin: $scope.formData.thongtin,
            isDone: false
        }
        $scope.todos.push(todo);
        $scope.formData.thongtin = "";
    }
}]);