(function ()
{
    //create a module called 'app'
    var app = angular.module('myApp', []);

    //create a controller inside the module 'app'
    app.controller("PersonController", function ()
    {

        //code in this anonymous function gets called when the controller is executed

        //create a field inside the controller referencing the users array
        this.people = aBunchOfPeople;
        this.wallet = 1000000;
        this.lastSavedAt = new Date().getTime();
    });

    app.controller("PanelController", function() {

        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        };

        this.isSelected = function(checkTab){
          return this.tab === checkTab;
        };
    });

    var aBunchOfPeople = [
        {
            name:       "Mr Bob",
            age:        35,
            motto:      "When the world gives you lemons, throw them at people",
            isHungry:   false,
            img: {
                full: "resources/images/grumpy_man.jpg",
                thumb: "resources/images/grumpy_man_thumb.jpg"
            },
            diary: [
                {
                    name: "lemon",
                    time: 10000,
                    portionSize: 'Small',
                    comment: "**screws up face**"
                },
                {
                    name: "lemon",
                    time: 20000,
                    portionSize: 'Small',
                    comment: "**screws up face**"
                },
                {
                    name: "lemon",
                    time: 30000,
                    portionSize: 'Small',
                    comment: "**screws up face**"
                },
                {
                    name: "lemon",
                    time: 40000,
                    portionSize: 'Medium',
                    comment: "**throws lemon at person**"
                }
            ]
        },
        {
            name:       "Mrs Jones",
            age:        57,
            motto:      "You can never have enough cats",
            isHungry:   true,
            img: {
                full: "resources/images/cat_lady.png",
                thumb: "resources/images/cat_lady_thumb.png"
            },
            diary: [
                {
                    name: "carrots and hummus",
                    time: 10000,
                    portionSize: 'Small',
                    comment: "Oh no thank you, Tiddles simply hates hummus"
                },
                {
                    name: "mackerel",
                    time: 20000,
                    portionSize: 'Large',
                    comment: "om nom nom"
                }
            ]
        },
        {
            name:       "Miss Kitty",
            age:        22,
            motto:      "If you get in my way, I will destroy you",
            isHungry:   false,
            img: {
                full: "resources/images/daria.jpg",
                thumb: "resources/images/daria_thumb.jpg"
            },
            diary: []
        }
    ]
})();
