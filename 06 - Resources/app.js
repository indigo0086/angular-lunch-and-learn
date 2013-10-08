var app = angular.module("PlacesApp", ["ngResource"]);

app.factory("Places", function ($resource) {
    return $resource("http://localhost\\:8080/Places/:id", { id: "@id"});
});

app.controller("PlacesController", function ($http, $scope, Places) {
    delete $http.defaults.headers.common['X-Requested-With'];
    $scope.place = Places.get({id: 1});
    $scope.placeId = 1;
    $scope.loadPlace = function(placeId){
        $scope.place = Places.get({id: placeId});
    }
});
