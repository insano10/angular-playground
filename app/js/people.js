(function ()
{

    var mod = angular.module("people", []);

    //create a controller inside the module 'mod'
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

    mod.controller("FoodDiaryController", function ()
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

    mod.directive("personView", function ()
    {
        return {
            restrict:     'E',
            templateUrl:  'templates/directives/person-view.html',
            controller:   function ()
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
                          },
            controllerAs: 'panelCtrl',
            scope: {
                person: "=" // = means 2-way binding of a property (@ = text bind, & = 1-way bind)
            }
        };
    });

})();