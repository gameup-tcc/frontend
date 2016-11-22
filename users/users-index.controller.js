(function() {
    'use strict';

    angular
        .module('app.users')
        .controller('UserIndexController', UserIndexController);

    UserIndexController.$inject = ['$http', '$routeParams', 'AuthService'];

    /* @ngInject */
    function UserIndexController($http, $routeParams, AuthService) {
        var vm = this;

        angular.extend(vm, {
            user: {},
            userId: $routeParams.userId,

            getUser: getUser,
        });


        activate();
        /////////////

        function activate() {
            getUser(vm.userId);
        }

        function getUser(id){
            AuthService.getOne('http://gameupapi.herokuapp.com/users/'+id+'/', function(data) {
                vm.user = data;
            });
        }
    }
})();
