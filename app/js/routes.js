(function(){

    angular.module("myApp").config(function($routeProvider){

        $routeProvider
            .when("/people", {
                templateUrl: "templates/pages/people/index.html",
                controller: "PersonController",
                controllerAs: "personCtrl"
        })
            .when("/people/:id", {
                templateUrl: "templates/pages/person-profile/index.html",
                controller: "PersonProfileController",
                controllerAs: "personProfCtrl"
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