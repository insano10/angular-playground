(function ()
{
    //create a module called 'app'
    var app = angular.module('myApp', []);

    //create a controller inside the module 'app'
    app.controller("UserController", function ()
    {

        //code in this anonymous function gets called when the controller is executed

        //create a field inside the controller referencing the users array
        this.users = theUsers;
        this.wallet = 1000000;
        this.lastSavedAt = new Date().getTime();
    });

    var theUsers = [
        {
            name:       "Mr Bob",
            age:        35,
            motto:      "When the world gives you lemons, throw them at people",
            isHungry:   false,
            img: {
                full: "resources/images/grumpy_man.jpg",
                thumb: "resources/images/grumpy_man_thumb.jpg"
            }
        },
        {
            name:       "Mrs Jones",
            age:        57,
            motto:      "You can never have enough cats",
            isHungry:   true,
            img: {
                full: "resources/images/cat_lady.png",
                thumb: "resources/images/cat_lady_thumb.png"
            }
        },
        {
            name:       "Miss Kitty",
            age:        22,
            motto:      "If you get in my way, I will destroy you",
            isHungry:   false,
            img: {
                full: "resources/images/daria.jpg",
                thumb: "resources/images/daria_thumb.jpg"
            }
        }
    ]
})();
