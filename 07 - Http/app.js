var app = angular.module("xkcdApp", ["ngResource"]);

app.controller("xkcdController", function ($scope, $http) {
    var url = "http://xkcd.com/info.0.json?callback=JSON_CALLBACK";
    $http.jsonp(url)
        .success(function(data){
            console.info(data);
            $scope.comic = data;
        });

    $scope.placeId = 1;

    $scope.loadPlace = function(placeId){
        Comics.then(function(response){
            $scope.comic = response.data;
        });
    }
});
