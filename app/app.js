(function ()
{
    var app = angular.module('myApp', []);

    app.controller("UserController", function ()
    {

        //code in this anonymous function gets called when the controller is executed

        //create a field inside the controller referencing the users array
        this.users = theUsers;
    });

    var theUsers = [
        {
            name:       "Mr Bob",
            age:        35,
            motto:      "When the world gives you lemons, throw them at people",
            isHungry:   false,
            isSleeping: false
        },
        {
            name:       "Mrs Jones",
            age:        57,
            motto:      "You can never have enough cats",
            isHungry:   true,
            isSleeping: false
        },
        {
            name:       "Miss Kitty",
            age:        22,
            motto:      "If you get in my way, I will destroy you",
            isHungry:   false,
            isSleeping: true
        }
    ]
})();
