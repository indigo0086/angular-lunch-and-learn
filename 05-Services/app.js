angular.module("SimpleApp.Services", []);
angular.module("SimpleApp.Controllers", ["SimpleApp.Services"])
angular.module("SimpleApp", ["SimpleApp.Controllers"]);

angular.module("SimpleApp.Services")
    .factory("VacationSpots", function(){
        var items = {
            query: function(){
                return [ "Maui", "California", "Tibet", "Brazil"]
            }
        }

        return items;
    });

angular.module("SimpleApp.Controllers")
    .controller("SimpleController", function ($scope, VacationSpots) {
        $scope.getVacations = function(){
            $scope.suggestions = VacationSpots.query();
        }
    });
