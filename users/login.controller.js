(function() {
    'use strict';

    angular
        .module('app.users')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthService'];

    /* @ngInject */
    function LoginController($location, AuthService) {
        var vm = this;

        angular.extend(vm, {
            user: {},

            goToNewUser: goToNewUser,
            submitLogin: submitLogin,
        });


        activate();
        /////////////

        function activate() {
        }

        function goToNewUser() {
            $location.path( '/user/new');
        }

        function submitLogin() {
            AuthService.login(vm.user);
            console.log('authenticate');
        }
    }

})();
