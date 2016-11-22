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
        }

        function saveUser(){
            AuthService.post('http://localhost:8000/users/', vm.game,  function(data) {
            });
            goToGameList();
        }

        function goToGameList() {
            $location.path( '/games/');
        }
    }
})();
