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
            AuthService.getOne('http://localhost:8000/games/'+id+'/', function(data) {
                vm.game = data;
            });
        }
    }
})();


