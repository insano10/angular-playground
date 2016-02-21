(function ()
{
    var mod = angular.module("people");

    mod.controller("PersonProfileController", ['$http', '$routeParams', function ($http, $routeParams)
    {

        var ctrl = this;
        ctrl.profile = {};
        ctrl.errors = {};

        $http.get('http://localhost:8080/api/person/' + $routeParams.id).then(
            function success(response)
            {
                ctrl.profile = response.data;
            }, function error(e)
            {
                ctrl.errors = [{
                    message: "Failed to get profile for person [" + $routeParams.id + "]",
                    cause:   JSON.stringify(e)
                }];
            });
    }]);

})();