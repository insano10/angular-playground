(function() {
    var app = angular.module('myApp', [ ]);

    app.controller("UserController", function(){

        //code in this anonymous function gets called when the controller is executed

        //create a field inside the controller referencing the bob object
        this.user = bob;
    });

    var bob = {
        name: "Mr Bob",
        age: 35,
        motto: "When the world gives you lemons, throw them at people"
    }
})();
