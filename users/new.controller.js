(function() {
    'use strict';

    angular
        .module('app.users')
        .controller('NewUserController', NewUserController);

    NewUserController.$inject = ['$http', '$location', 'AuthService'];

    /* @ngInject */
    function NewUserController($http, $location, AuthService) {
        var vm = this;

        angular.extend(vm, {
            user: {},

            goToGameList: goToGameList,
            saveUser: saveUser,
        });


        activate();
        /////////////

        function activate() {
            vm.user.role = "GEN";
        }

        function saveUser(){
            console.log(vm.user);
            AuthService.post('https://gameupapi.herokuapp.com/users/', vm.user,  function(data) {
            });
            goToGameList();
        }

        function goToGameList() {
            $location.path( '/games/');
        }
    }
})();
