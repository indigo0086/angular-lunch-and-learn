angular.module("SimpleApp.Services");
angular.module("SimpleApp.Controllers", ["SimpleApp.Services"]);
angular.module("SimpleApp", []);

angular.module("SimpleApp.Controllers")
    .controller("SimpleController", function($scope){
        $scope.greeting = "Hello, World";
    });
