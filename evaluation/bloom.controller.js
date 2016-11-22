(function() {
    'use strict';

    angular
        .module('app.evaluation')
        .controller('BloomEvaluationController', BloomEvaluationController);

    BloomEvaluationController.$inject = ['$http', '$location', '$routeParams', 'AuthService', 'FrameworkService'];

    /* @ngInject */
    function BloomEvaluationController($http, $location,  $routeParams, AuthService, FrameworkService) {
        var vm = this;

        angular.extend(vm, {
            game: {},
            gameId: $routeParams.gameId,
            bloom: FrameworkService.bloomFramework,
            bloom_eval: {},
            submission: {},

            submitEvaluation: submitEvaluation,
        });

        activate();

        ////////////

        function activate() {
            console.log("Activate bloom index");

            vm.submission.game = vm.gameId;
            vm.submission.eval_type = "BL";
        }

        function submitEvaluation() {
            vm.submission.result = JSON.stringify(vm.bloom_eval);
            AuthService.post('http://gameupapi.herokuapp.com/games/'+vm.gameId+'/evaluations/', vm.submission,  function(data) {
            });
            goToGame(vm.gameId);
        }

        function goToGame(gameId) {
            $location.path( '/games/' + gameId );
        }

    }
})();


