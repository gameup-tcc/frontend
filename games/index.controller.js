(function() {
    'use strict';

    angular
        .module('app.games')
        .controller('GamesIndexController', GamesIndexController);

    GamesIndexController.$inject = ['$http', '$location', 'AuthService'];

    /* @ngInject */
    function GamesIndexController($http, $location, AuthService) {
        var vm = this;

        angular.extend(vm, {
            games: [],

            buildGridModel: buildGridModel,
            goToGame:goToGame,
        });


        activate();
        /////////////

        function activate() {
            console.log("Activate games index");
            getGameList();
        }

        function buildGridModel(){

            var colors = ['gray', 'red', 'green', 'darkBlue', 'blue', 'yellow',
                          'pink', 'deepBlue', 'purple', 'lightPurple', 'orange']
            for (var j=0; j<vm.games.length; j++) {

                vm.games[j].span  = { row : 1, col : 1 };
                vm.games[j].background = colors[Math.floor((Math.random() * 10) + 1)];

                switch((j%11)+1) {
                    case 1:
                        vm.games[j].span.row = vm.games[j].span.col = 2;
                        break;

                    case 4:
                        vm.games[j].span.col = 2;
                        break;

                    case 5:
                        vm.games[j].span.row = vm.games[j].span.col = 2;
                        break;

                }
            }
        }

        function getGameList(){
            AuthService.getList('http://gameupapi.herokuapp.com/games/', function(data) {
                vm.games = data;
                buildGridModel(vm.games);
            });
        }

        function goToGame(gameId) {
            $location.path( '/games/' + gameId );
        }

    }
})();
