(function ()
{
    var mod = angular.module("people");

    mod.controller("PersonProfileController", ['$routeParams', 'Person', function ($routeParams, Person) //note we do not prefix it with $, this is for angular services only
    {

        var ctrl = this;
        ctrl.profile = {};
        ctrl.errors = {};

        Person.get($routeParams.id).then(
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