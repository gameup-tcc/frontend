angular.module('app').
config(function($routeProvider) {
    $routeProvider

    // Evaluations
    .when('/evaluation/:gameId', {
        templateUrl: 'evaluation/index.html',
    })
    .when('/evaluation/:gameId/bloom', {
        templateUrl: 'evaluation/bloom.html',
    })
    .when('/evaluation/:gameId/gamification', {
        templateUrl: 'evaluation/gamification.html',
    })

    // Games
    .when('/games', {
        templateUrl: 'games/index.html'
    })
    .when('/games/new', {
        templateUrl: 'games/new.html'
    })
    .when('/games/edit/:gameId', {
        templateUrl: 'games/edit.html'
    })
    .when('/games/:gameId', {
        templateUrl: 'games/detail.html'
    })

    // Users
    .when('/user/new', {
        templateUrl: 'users/new.html'
    })
    .when('/user/:userId', {
        templateUrl: 'users/index.html',
        controller: 'UserIndexController',
        controllerAs: 'userIndexCtrl',
    })
    .when('/login', {
        templateUrl: 'users/login.html'
    })
    /*
    .when('/user/:userId/edit', {
        templateUrl: 'users/edit.html'
    })
    */

    // 404
    .when('/404', {
        templateUrl: '404.html'
    })

    // Home
    .when('/', {redirectTo:'/games'})

    // Whatever
    .when('/zbrubbles', {
        template: '<div>There is nothing in here</div>'
    })

    //Otherwise
    .otherwise({redirectTo:'/404'});
});
