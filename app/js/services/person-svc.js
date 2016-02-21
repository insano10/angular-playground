(function() {

    var mod = angular.module("people");

    mod.factory("Person", ["$http", function PersonFactory($http){

        return {

            getAll: function(){
                return $http.get('http://localhost:8080/api/person');
            },
            get: function(id){
                return $http.get('http://localhost:8080/api/person/' + id);
            }
        }
    }]);

})();