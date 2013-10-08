var app = angular.module("SimpleApp", []);

app.filter("namebadge", function(){
    return function(input){
        var greeting = "Hello, my name is: " + input + "!";
        return greeting;
    }
})


app.controller("SimpleController", function($scope){
    $scope.amount = 123;
    $scope.loud = "HELLO!";
    $scope.quiet = "hello...";
    $scope.hush = "Some people say I talk a little bit too much do you think so?";
    $scope.limit = 10;
    $scope.name = "Daniel";
})
