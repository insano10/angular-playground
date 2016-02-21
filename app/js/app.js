(function ()
{
    //create a module called 'mod' that has dependencies on 'people' and 'player' modules
    var mod = angular.module('myApp', ['ngRoute', 'ngResource', 'people', 'player']);

    /*
    As I want to put each controller/directive in its own file I am declaring the modules here to avoid having to include the files
    in any particular order.

    angular.module("xxx", [])  is a setter and will create the module
    angular.module("xxx")      is a getter and is used to add stuff to it

    So I am using it as a setter here to define the empty modules upfront and each controller/directive file will use the
    getter to add itself

     */
    angular.module("people", []);
    angular.module("player", []);

})();
