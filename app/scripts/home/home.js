'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'scripts/home/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        });
    }])

    .controller('HomeController', ['contentfulService', '$location', '$anchorScroll', function (contentfulService, $location, $anchorScroll) {
        var vm = this;

        vm.init = function () {

            contentfulService.getProjects().then(function (data) {
                vm.projects = data;
            }, function (error) {
                // TODO show error
            });

        };

        vm.init();

        vm.navigateToProject = function (projectName) {
            Pace.restart();

            var path = '/project/' + projectName;
            $anchorScroll();
            $location.path(path);
        };
    }]);