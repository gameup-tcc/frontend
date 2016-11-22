(function() {
    'use strict';

    angular
        .module('app.games')
        .controller('GameEditController', GameEditController);

    GameEditController.$inject = ['$http', '$location', '$routeParams', 'AuthService'];

    /* @ngInject */
    function GameEditController($http, $location, $routeParams, AuthService) {
        var vm = this;

        angular.extend(vm, {
            game: {},
            gameId: $routeParams.gameId,

            getGame: getGame,
            goToGame: goToGame,
            saveGame: saveGame,
        });


        activate();
        /////////////

        function activate() {
            getGame(vm.gameId);
        }

        function getGame(id){
            AuthService.getOne('https://gameupapi.herokuapp.com/games/'+id+'/',  function(data) {
                vm.game = data;
            });
        }

        function saveGame(){
            AuthService.put('https://gameupapi.herokuapp.com/games/'+vm.gameId+'/',  vm.game, function(data) {
            });
            goToGame(vm.gameId);
        }

        function goToGame(gameId) {
            $location.path( '/games/'+gameId+'/');
        }
    }
})();
