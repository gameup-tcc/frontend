(function() {
    'use strict';

    angular
        .module('app.games')
        .controller('GameDetailController', GameDetailController);

    GameDetailController.$inject = ['$http', '$routeParams', 'AuthService', 'FrameworkService'];

    /* @ngInject */
    function GameDetailController($http, $routeParams, AuthService, FrameworkService) {
        var vm = this;

        angular.extend(vm, {
            game: {},
            gameId: $routeParams.gameId,
            gamificationReport: {},

            getTechniqueName: FrameworkService.getTechniqueName,
            getSubProcessName: FrameworkService.getSubProcessName,
        });

        var attributes = FrameworkService.attributes;
        var assessment = FrameworkService.assessments;
        var cognitiveProcesses = FrameworkService.cognitiveProcesses;
        var coreDrives = FrameworkService.coreDrives;

        activate();
        /////////////

        function activate() {
            getGameInfo(vm.gameId);
            getGamificationReport(vm.gameId);
            getBloomReport(vm.gameId);
        }


        function getGameInfo(id){
            var game;
            AuthService.getOne('http://localhost:8000/games/'+id+'/', function(data) {
                vm.game = data;
            });
        }

        function getBloomReport(id) {
            AuthService.getOne('http://localhost:8000/games/'+id+'/reports/bloom',  function(data) {
                vm.bloomReport = data;
                configureSpiderChart('bloomProcessChart', vm.bloomReport.process, cognitiveProcesses, 'Processos cognitivos');
                configureSpiderChart('bloomAssessmentChart', vm.bloomReport.assessment, assessment, 'Assessment');
                var subProcessData = configureSubProcessNames(vm.bloomReport.topSubProcesses);
                configureColumnChart('bloomColumnChart', subProcessData, 'Subprocessos');
            });
        }

        function getGamificationReport(id) {
            AuthService.getOne('http://localhost:8000/games/'+id+'/reports/gamification',  function(data) {
                vm.gamificationReport = data;
                configureSpiderChart('gamificationCoreChart', vm.gamificationReport.coreDrive, coreDrives, 'Motivações básicas');
                configureSpiderChart('gamificationAttributesChart', vm.gamificationReport.attributes, attributes, 'Atributos');
                var techData = configureTechniqueNames(vm.gamificationReport.topTechniques);
                configureColumnChart('gamificationColumnChart', techData, 'Técnicas');
            });
        }

        function configureSubProcessNames(subProcesses){
            var subData = [], i = 0;
            _.forEach(subProcesses, function(subProcess) {
                var subProcessData = [];
                subProcessData[0] = vm.getSubProcessName(subProcess[0]);
                subProcessData[1] = subProcess[1];
                i++;
                subData.push(subProcessData);
            });
            return subData;
        }

        function configureTechniqueNames(techniques){
            var techData = [], i = 0;
            _.forEach(techniques, function(technique) {
                var techniqueData = [];
                techniqueData[0] = vm.getTechniqueName(technique[0]);
                techniqueData[1] = technique[1];
                techData.push(techniqueData);
            });
            return techData;
        }

        function configureColumnChart(id, chartData, title){
            chartData = chartData.sort(function(a, b) {
                if(a[0] < b[0]) return -1;
                if(a[0] > b[0]) return 1;
                return 0;
            });


            Highcharts.chart(id, {

                    chart: {
                        type: 'column',
                        spacingLeft: 10,
                        spacingRight: 10
                    },

                    title: {
                        text: title,
                        x: 0
                    },

                    credits: {
                        enabled: false
                    },

                    pane: {
                        size: '80%'
                    },

                    xAxis: {
                        tickmarkPlacement: 'on',
                        lineWidth: 0,
                        labels: {
                            enabled: false
                        }
                    },

                    yAxis: {
                        title: false,
                        tickInterval: 1,
                        gridLineInterpolation: 'polygon',
                        lineWidth: 0,
                        min: 0,
                        labels: {
                            enabled: false
                        }
                    },

                    tooltip: {
                        shared: true,
                        pointFormat: '<span style="color:{series.color}"><b>{point.y:,.0f}</b><br/>'
                    },

                    legend: {
                        enabled: false
                    },

                    series: [{
                        data: chartData,
                        fillOpacity: 0.4,
                        pointPlacement: 'on'
                    }]

            });
        }

        function configureSpiderChart(id, chartData, labels, title){
            chartData.splice(0, 1);
            var maxValue = Math.ceil(Math.max.apply(null, chartData));

            Highcharts.chart(id, {

                    chart: {
                        polar: true,
                        type: 'area'
                    },

                    title: {
                        text: title,
                        x: 0
                    },

                    credits: {
                        enabled: false
                    },

                    pane: {
                        size: '80%'
                    },

                    xAxis: {
                        categories: labels,
                        tickmarkPlacement: 'on',
                        lineWidth: 0
                    },

                    yAxis: {
                        tickInterval: 1,
                        gridLineInterpolation: 'polygon',
                        lineWidth: 0,
                        min: 0,
                        max: maxValue,
                        labels: {
                            enabled: false
                        }
                    },

                    tooltip: {
                        shared: true,
                        pointFormat: '<span style="color:{series.color}"><b>{point.y:,.0f}</b><br/>'
                    },

                    legend: {
                        enabled: false
                    },

                    series: [{
                        data: chartData,
                        fillOpacity: 0.4,
                        pointPlacement: 'on'
                    }]

            });
        }
    }
})();

