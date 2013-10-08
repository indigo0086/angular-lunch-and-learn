var controllers = angular.module("SimpleApp.Controllers", []);
var app = angular.module("SimpleApp", ["ngRoute", "SimpleApp.Controllers"]);

controllers.controller("RedController", function($scope){
    $scope.colorClass = "red";
});

controllers.controller("BlueController", function($scope){
    $scope.colorClass = "blue";
});

app.config(function($routeProvider){
    $routeProvider
        .when("/red", {
            templateUrl: "red.html",
            controller: "RedController"
        })
        .when("/blue", {
            templateUrl: "blue.html",
            controller: "BlueController"
        })
});
