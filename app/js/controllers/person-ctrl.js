(function ()
{

    var mod = angular.module("people");

    //create a controller inside the module 'people'
    mod.controller("PersonController", ['$http', function ($http)
    {
        //code in this anonymous function gets called when the controller is executed
        var ctrl = this;
        ctrl.people = [];

        //create a field inside the controller referencing the users array
        $http.get('http://localhost:8080/api/person').then(
            function success(response)
            {
                ctrl.people = response.data.people;
            }, function error(e)
            {
                console.log("Failed to get people: " + JSON.stringify(e));
            });
    }]);

})();