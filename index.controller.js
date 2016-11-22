(function() {
    'use strict';

    angular
        .module('app')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$location', '$rootScope', 'AuthService'];

    /* @ngInject */
    function IndexController($location, $rootScope, AuthService) {
        var vm = this;

        if($rootScope.user === undefined) {
            $rootScope.user = {username: '', isLogged: false};
        }

        angular.extend(vm, {
            isOpen: false,
            sidenavOptions: [
                {option: 'home',
                 icon: 'mdi-home',
                 text: 'Início',
                 click: '#/',
                },
                //{option: 'profile',
                // icon: 'mdi-account',
                // text: 'Perfil',
                // click: '#/user',
                //},
                {option: 'gameList',
                 icon: 'mdi-gamepad-variant',
                 text: 'Jogos',
                 click: '#/games',
                },
                //{option: 'forum',
                // icon: 'mdi-forum',
                // text: 'Forum',
                // click: '#/forum',
                //},
            ],

            goToHome: goToHome,
            login: goToLogin,
            logout: logout,
        });

        activate();

        ////////////

        function activate() {
            console.log("Activate home index");
            if(AuthService.isLoggedIn()) {
                $rootScope.user = {
                    username: AuthService.getUsername(),
                    isLogged: true
                };
            }
        }

        function goToHome() {
            $location.path( '/games');
        }

        function goToLogin() {
            AuthService.redirectToLogin();
        }

        function logout() {
            AuthService.logout();
        }
    }
})();
