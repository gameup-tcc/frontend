(function() {
    'use strict';

    angular
        .module('app.users')
        .controller('UserEditController', UserEditController);

    UserEditController.$inject = ['$http', '$location', '$routeParams', 'AuthService'];

    /* @ngInject */
    function UserEditController($http, $location, $routeParams, AuthService) {
        var vm = this;

        angular.extend(vm, {
            user: {},
            userId: $routeParams.userId,

            getUser: getUser,
            goToGameList: goToGameList,
            saveUser: saveUser
        });


        activate();
        /////////////

        function activate() {
            getUser(vm.userId);
        }

        function getUser(id){
            AuthService.getOne('http://localhost:8000/users/'+id+'/', function(data) {
                vm.user = data;
            });
        }

        function saveUser(){
            AuthService.put('http://localhost:8000/users/'+vm.userId+'/',  vm.user, function(data) {
            });
            goToGameList();
        }

        function goToGameList() {
            $location.path( '/games/');
        }
    }
})();
