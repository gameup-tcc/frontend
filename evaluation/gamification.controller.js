(function() {
    'use strict';

    angular
        .module('app.evaluation')
        .controller('GamificationEvaluationController', GamificationEvaluationController);

    GamificationEvaluationController.$inject = ['$http', '$location', '$routeParams', 'AuthService', 'FrameworkService'];

    /* @ngInject */
    function GamificationEvaluationController($http, $location, $routeParams, AuthService, FrameworkService) {
        var vm = this;

        angular.extend(vm, {
            game: {},
            gameId: $routeParams.gameId,
            gamif: {},
            framework: FrameworkService.gamificationFramework,
            submission:{},

            submitEvaluation: submitEvaluation,
        });

        activate();

        ////////////

        function activate() {
            console.log("Activate gamif eval index");

            vm.submission.game = vm.gameId;
            vm.submission.eval_type = "GA";
        }

        function submitEvaluation() {
            vm.submission.result = JSON.stringify(vm.gamif);

            AuthService.post('http://localhost:8000/games/'+vm.gameId+'/evaluations/', vm.submission,  function(data) {
            });
            goToGame(vm.gameId);
        }


        // Private functions
        function goToGame(gameId) {
            $location.path( '/games/' + gameId );
        }

    }
})();


