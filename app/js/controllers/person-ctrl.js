(function ()
{

    var mod = angular.module("people");

    //create a controller inside the module 'people'
    mod.controller("PersonController", ['Person', function (Person)
    {
        //code in this anonymous function gets called when the controller is executed
        var ctrl = this;

        //call the Person service (which returns a $resource) to get all the people
        //The call to query returns immediately with an empty object and then gets updated asynchronously
        //when the data comes back. Due to the angular data binding, the app then gets updated
        //The success and error callbacks are optional
        ctrl.people = Person.query(function(value, headers){
            console.log(JSON.stringify(value));
        }, function(errorResponse){
            console.log("error: " + JSON.stringify(e));
        });
    }]);

})();