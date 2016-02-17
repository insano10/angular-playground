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
        this.lastSavedAt = Date.now();
    });

    app.controller("PanelController", function ($scope)
    {

        this.tab = 1;
        this.feelings = ["happy", "sad", "excited"];

        this.selectTab = function (setTab)
        {
            this.tab = setTab;
        };

        this.isSelected = function (checkTab)
        {
            return this.tab === checkTab;
        };
    });

    app.controller("FoodDiaryController", function ()
    {

        this.newEntry = {
            food: "", portionSize: "", comment: "", feeling: "happy"
        };

        this.addEntry = function (person)
        {

            person.diary.push({
                                  name:        this.newEntry.food,
                                  time:        Date.now(),
                                  portionSize: this.newEntry.portionSize,
                                  comment:     this.newEntry.comment,
                                  feeling:     this.newEntry.feeling
                              });

            //reset the form values
            this.newEntry = {
                food: "", portionSize: "", comment: "", feeling: "happy"
            };
        };
    });

    // define a custom directive that translates to <player-status> in html
    app.directive("playerStatus", function() {

        return {
            restrict: 'E', //this directive works on elements (A for attributes)
            templateUrl: 'player-status.html' //url of the html template
        };
    });

    var aBunchOfPeople = [
        {
            name:     "Mr Bob",
            age:      35,
            motto:    "When the world gives you lemons, throw them at people",
            isHungry: false,
            img:      {
                full:  "resources/images/grumpy_man.jpg",
                thumb: "resources/images/grumpy_man_thumb.jpg"
            },
            diary:    [
                {
                    name:        "lemon",
                    time:        10000,
                    portionSize: 'Small',
                    comment:     "**screws up face**",
                    feeling:     "sad"
                },
                {
                    name:        "lemon",
                    time:        20000,
                    portionSize: 'Small',
                    comment:     "**screws up face**",
                    feeling:     "sad"
                },
                {
                    name:        "lemon",
                    time:        30000,
                    portionSize: 'Small',
                    comment:     "**screws up face**",
                    feeling:     "sad"
                },
                {
                    name:        "lemon",
                    time:        40000,
                    portionSize: 'Medium',
                    comment:     "**throws lemon at person**",
                    feeling:     "excited"
                }
            ]
        },
        {
            name:     "Mrs Jones",
            age:      57,
            motto:    "You can never have enough cats",
            isHungry: true,
            img:      {
                full:  "resources/images/cat_lady.png",
                thumb: "resources/images/cat_lady_thumb.png"
            },
            diary:    [
                {
                    name:        "carrots and hummus",
                    time:        10000,
                    portionSize: 'Small',
                    comment:     "Oh no thank you, Tiddles simply hates hummus",
                    feeling:     "sad"
                },
                {
                    name:        "mackerel",
                    time:        20000,
                    portionSize: 'Large',
                    comment:     "om nom nom",
                    feeling:     "happy"
                }
            ]
        },
        {
            name:     "Miss Kitty",
            age:      22,
            motto:    "If you get in my way, I will destroy you",
            isHungry: false,
            img:      {
                full:  "resources/images/daria.jpg",
                thumb: "resources/images/daria_thumb.jpg"
            },
            diary:    []
        }
    ]
})();
