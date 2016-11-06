'use strict';

angular.module('myApp.project', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/project/:project', {
            templateUrl: 'scripts/project/project.html',
            controller: 'ProjectController',
            controllerAs: 'projectCtrl'
        });
    }])

    .controller('ProjectController', ['$routeParams', '$location', '$anchorScroll', 'projectsService', function ($routeParams, $location, $anchorScroll, projectsService) {
        var vm = this;

        vm.init = function () {

            projectsService.getProjects().then(function (data) {
                vm.projects = data;
                vm.projectIndex = projectsService.getProjectIndex($routeParams.project);
                vm.project = vm.projects[vm.projectIndex];

                vm.hasNext = (vm.projectIndex < vm.projects.length);
                vm.hasPrev = (vm.projectIndex > 0);
            }, function (error) {
                // show error
            });
        };

        vm.prev = function () {
            var prevIndex = vm.projectIndex - 1;
            var path = "/project/" + vm.projects[prevIndex].name;
            $anchorScroll();
            $location.path(path);
        };

        vm.next = function () {
            var nextIndex = vm.prevIndex + 1;
            var path = "/project/" + vm.projects[nextIndex].name;
            $anchorScroll();
            $location.path(path);
        };

        vm.init();
    }]);