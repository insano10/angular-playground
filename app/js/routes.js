(function(){

    angular.module("myApp").config(function($routeProvider){

        $routeProvider
            .when("/users", {
                templateUrl: "templates/pages/users/index.html"
        })
            .when("/highscores", {
                templateUrl: "templates/pages/highscores/index.html"
        })
            .when("/", {
                redirectTo: '/users'
        })
            .otherwise({
                redirectTo: "/"
       })
    });

})();