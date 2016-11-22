(function() {
    'use strict';

    angular
        .module('app.users')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['AuthService'];

    /* @ngInject */
    function LoginController(AuthService) {
        var vm = this;

        angular.extend(vm, {
            user: {},

            submitLogin: submitLogin,
        });


        activate();
        /////////////

        function activate() {
        }

        function submitLogin() {
            AuthService.login(vm.user);
            console.log('authenticate');
        }
    }

})();
