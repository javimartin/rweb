'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'scripts/home/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        });
    }])

    .controller('HomeController', ['$rootScope', 'contentfulService', '$location', '$anchorScroll', function ($rootScope, contentfulService, $location, $anchorScroll) {
        var vm = this;

        vm.init = function () {

            contentfulService.getTextHomePage().then(function (data) {

                // use the field body for EN, bodyFR for FR or bodyES for ES
                var body = ($rootScope.lang === "EN") ? "body" : "body" + $rootScope.lang;

                // if body is empty, use english as default
                vm.textHomePage = (_.isEmpty(data.fields[body])) ? data.fields["body"] : data.fields[body];

            }, function (error) {
                // TODO show error
            });

            contentfulService.getProjects().then(function (data) {
                vm.projects = data;
                _.forEach(vm.projects, function (project) {
                    // use the field title for EN, titleFR for FR or titleES for ES
                    var title = ($rootScope.lang === "EN") ? "title" : "title" + $rootScope.lang;

                    // if title is empty, use english as default
                    project.fields.projectTitle = (_.isEmpty(project.fields[title])) ? project.fields["title"] : project.fields[title];
                });
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