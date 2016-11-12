'use strict';

angular.module('myApp.project', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/project/:project', {
            templateUrl: 'scripts/project/project.html',
            controller: 'ProjectController',
            controllerAs: 'projectCtrl'
        });
    }])

    .controller('ProjectController', ['$rootScope', '$routeParams', '$location', '$anchorScroll', 'contentfulService', function ($rootScope, $routeParams, $location, $anchorScroll, contentfulService) {
        var vm = this;
        var projectBasePath = "/project"

        vm.init = function () {

            contentfulService.getProjects().then(function (data) {
                vm.projects = data;
                vm.projectIndex = contentfulService.getProjectIndex($routeParams.project);
                vm.project = vm.projects[vm.projectIndex];

                // use the field body for EN, bodyFR for FR or bodyES for ES
                var body = ($rootScope.lang === "EN") ? "body" : "body" + $rootScope.lang;

                // if body is empty, use english as default
                vm.projectBody  = (_.isEmpty(vm.project.fields[body])) ? vm.project.fields["body"] : vm.project.fields[body];

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