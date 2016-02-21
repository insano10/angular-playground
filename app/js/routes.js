(function(){

    angular.module("myApp").config(function($routeProvider){

        $routeProvider
            .when("/people", {
                templateUrl: "templates/pages/people/index.html",
                controller: "PersonController",
                controllerAs: "personCtrl"
        })
            .when("/highscores", {
                templateUrl: "templates/pages/highscores/index.html"
        })
            .when("/", {
                redirectTo: '/people'
        })
            .otherwise({
                redirectTo: "/"
       })
    });

})();