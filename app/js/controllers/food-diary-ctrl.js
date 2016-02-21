(function ()
{
    var mod = angular.module("people");

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

})();