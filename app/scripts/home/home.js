'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'scripts/home/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        });
    }])

    .controller('HomeController', ['projectsService', '$location', function (projectsService, $location) {
        var vm = this;

        vm.init = function () {

            projectsService.getProjects().then(function (data) {
                vm.projects = data;
            }, function (error) {
                // TODO show error
            });

        };

        vm.init();
    }]);