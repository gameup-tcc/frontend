(function() {
    'use strict';

    angular
        .module('app.games')
        .controller('NewGameController', NewGameController);

    NewGameController.$inject = ['$http', '$location', 'AuthService'];

    /* @ngInject */
    function NewGameController($http, $location, AuthService) {
        var vm = this;

        angular.extend(vm, {
            game: {},

            goToGameList: goToGameList,
            saveGame: saveGame,
        });


        activate();
        /////////////

        function activate() {
        }

        function saveGame(){
            AuthService.post('http://gameupapi.herokuapp.com/games/', vm.game,  function(data) {
            });
            goToGameList();
        }

        function goToGameList() {
            $location.path( '/games/');
        }
    }
})();
