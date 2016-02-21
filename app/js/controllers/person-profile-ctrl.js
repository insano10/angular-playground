(function ()
{
    var mod = angular.module("people");

    mod.controller("PersonProfileController", ['$routeParams', 'Person', function ($routeParams, Person) //note we do not prefix it with $, this is for angular services only
    {

        var ctrl = this;
        ctrl.errors = {};

        //call the Person service to use the $resource to get a person with the given id
        ctrl.profile = Person.get({id: $routeParams.id});
    }]);

})();