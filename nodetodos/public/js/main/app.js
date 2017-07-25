//Khai báo angular
var app = angular.module("app.todos", []); //Khai báo không phụ thuộc thư viện nào

app.controller("todoController", ['$scope', function ($scope) {
    $scope.appName = "Công việc";
}]);