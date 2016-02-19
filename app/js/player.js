(function() {

    var mod = angular.module("player", []);

    // define a custom directive that translates to <player-status> in html
    mod.directive("playerStatus", function ()
    {

        return {
            restrict:     'E', //this directive works on elements (A for attributes)
            templateUrl:  'templates/player-status.html', //url of the html template
            controller:   function ()
                          {            //define a controller scoped within this directive
                              this.wallet = 1000000;
                              this.lastSavedAt = Date.now();
                          },
            controllerAs: 'playerCtrl'      //the alias for the controller
        };
    });

})();