(function() {
    'use strict';

    angular
        .module('app')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$http', '$location', '$mdToast', '$rootScope', '$window'];

    /* @ngInject */
    function AuthService($http, $location, $mdToast, $rootScope, $window) {
        var vm = this;

        angular.extend(vm, {

            isLoggedIn: isLoggedIn,
            redirectToLogin: redirectToLogin,
            login:login,
            logout: logout,

            getUsername: getUsername,
            removeFromSession: removeFromSession,

            getList: getList,
            getOne: getOne,
            post: post,
            put: put,
        });

        return vm;

        /////////

        function login(data) {
            authenticate(data);
        }

        function logout() {
            console.log('logout');
            removeFromSession('headers');
            removeFromSession('username');
            $rootScope.user = {username: '', isLogged: false};
            goToHome();
        }

        function authenticate(data) {
            $http({method: 'POST', url:'http://localhost:8000/api-token-auth/', data: data})
            .success(function(response){
                var headers = {'Authorization': 'JWT '+response.token};
                setIntoSession('headers', headers);
                setIntoSession('username', data.username);
                $rootScope.user = {username: data.username, isLogged: true};
                goToHome();
            })
            .catch(function(error) {
                showToast('Wrong username or password');
            });
        }

        function isLoggedIn() {
             return !_.isEmpty(getFromSession('headers'));
        }

        function getUsername() {
            return getFromSession('username');
        }

        function getOne(url, callback) {
            $http({method: 'GET', url:url, headers: getFromSession('headers')})
            .success(function(response){
                callback(response);
            })
            .catch(function(error) {
                redirectToLogin();
            });
        }

        function getList(url, callback) {
            $http({method: 'GET', url:url, headers: getFromSession('headers')})
            .success(function(response){
                callback(response);
            })
            .catch(function(error) {
                redirectToLogin();
            });
        }

        function post(url,data, callback) {
            $http({method: 'POST', url:url, data: data, headers: getFromSession('headers')})
            .success(function(response){
                callback(response);
            })
            .catch(function(error) {
                redirectToLogin();
            });
        }

        function put(url, data, callback) {
            $http({method: 'PUT', url:url, data: data, headers: getFromSession('headers')})
            .success(function(response){
                callback(response);
            })
            .catch(function(error) {
                redirectToLogin();
            });
        }

        function redirectToLogin() {
            $location.path('/login');
        }

        // Local functions
        function getFromSession(key) {
            return JSON.parse($window.sessionStorage.getItem(key));
        }

        function setIntoSession(key, data) {
            $window.sessionStorage.setItem(key, JSON.stringify(data));
        }

        function removeFromSession(key) {
            $window.sessionStorage.removeItem(key);
        }

        function showToast(message) {
           var pinTo = "bottom right";
            $mdToast.show(
              $mdToast.simple()
                .textContent(message)
                .position(pinTo)
                .hideDelay(3000)
            );
        }

        function goToHome() {
            $location.path( '/games');
        }
    }
})();
