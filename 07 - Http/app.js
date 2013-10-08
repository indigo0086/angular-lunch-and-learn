var app = angular.module("xkcdApp", ["ngResource"]);

function setComic(http, url, scope) {
    http.get(url)
        .success(function(data){
            scope.comic = data;
            scope.hasError = false;
        })
        .error(function(){
            scope.hasError = true;
        });
}

app.controller("xkcdController", function ($scope, $http) {
    var proxy = "http://jsonp.jit.su/?url="
    var latestUrl = proxy + "http://xkcd.com/info.0.json";

    //get latest comic on load
    setComic($http, latestUrl, $scope)

    $scope.loadComic = function(placeId){
        var url = proxy + "http://xkcd.com/" + $scope.issueNumber + "/info.0.json";
        setComic($http, url, $scope);
    };

    $scope.hasErrorClass = function(){
        if($scope.hasError){
            return "has-error";
        }
        return "";
    };
});
