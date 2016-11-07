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
        var projectBasePath = "/project"

        vm.init = function () {

            projectsService.getProjects().then(function (data) {
                vm.projects = data;
                vm.projectIndex = projectsService.getProjectIndex($routeParams.project);
                vm.project = vm.projects[vm.projectIndex];

                vm.hasNext = (vm.projectIndex < vm.projects.length - 1);
                vm.hasPrev = (vm.projectIndex > 0);
            }, function (error) {
                // TODO show error
            });
        };

        /**
         * Navigates to previous or next project based on the direction parameter
         *
         * @param direction indicates where to navigate, -1 for the previous project, +1  for the next project
         */
        vm.navigatePrevOrNext = function (direction) {
            Pace.restart();

            var prevOrNextIndex = vm.projectIndex + parseInt(direction);
            var path = projectBasePath + "/" + vm.projects[prevOrNextIndex].fields.name;

            $anchorScroll();
            $location.path(path);
        };

        vm.init();
    }]);