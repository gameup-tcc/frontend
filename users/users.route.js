angular.module('app.users').
config(function($routeProvider) {
    $routeProvider.when('/user/edit', {
        templateUrl:'users/edit.html'
    })

    .otherwise({redirectTo:'/'});
});
