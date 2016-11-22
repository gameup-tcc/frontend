(function() {
    'use strict';

    angular
        .module('app.evaluation')
        .controller('IndexEvaluationController', IndexEvaluationController);

    IndexEvaluationController.$inject = ['$http', '$routeParams', 'AuthService'];

    /* @ngInject */
    function IndexEvaluationController($http, $routeParams, AuthService) {
        var vm = this;

        angular.extend(vm, {
            game: {},
            gameId: $routeParams.gameId,

            getGame: getGame,
        });

        activate();

        ////////////

        function activate() {
            console.log("Activate eval index");
            getGame(vm.gameId);
        }

        function getGame(id) {
            AuthService.getOne('https://gameupapi.herokuapp.com/games/'+id+'/', function(data) {
                vm.game = data;
            });
        }
    }
})();


