angular.module("SimpleApp.Controllers", []);
angular.module("SimpleApp", []);

angular.module("SimpleApp.Controllers")
    .controller("SimpleController", function($scope){
        $scope.greeting = "Hello, World";
    });
