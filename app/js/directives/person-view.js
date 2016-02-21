(function ()
{
    var mod = angular.module("people");

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
            },
            link: function(scope, element, attrs){

                if(scope.person.motto.indexOf("destroy") >= 0)
                {
                    element.find("#person-motto").addClass("warning-text");
                }
            }
        };
    });

})();