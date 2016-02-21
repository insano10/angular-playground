(function() {

    var mod = angular.module("people");

    mod.factory("Person", ["$resource", function PersonFactory($resource){

        return $resource("http://localhost:8080/api/person/:id", {}, {});

    }]);

})();