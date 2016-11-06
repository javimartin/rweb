'use strict';

angular.module('myApp.projectsService', [])
    .service('projectsService', ["$window", "$q", function ($window, $q) {
        var client = contentful.createClient({
            space: 'fvqgat31yo0h',
            accessToken: '105b53ff041218ff0f02b193dd99a1484612ad4d838a586271874af3e34c054f'
        });

        this.getProjects = function () {
            var deferred = $q.defer();

            // TODO rethink model, session storage,...
            var projects = JSON.parse($window.sessionStorage.getItem("projects"));

            if (!projects || _.isUndefined(projects)) {
                // Only entries of the Blog Post content type
                client.getEntries({
                    'content_type': '2wKn6yEnZewu2SCCkus4as'
                }).then(function (data) {
                    projects = data.items;
                    $window.sessionStorage.setItem("projects", JSON.stringify(projects));

                    deferred.resolve(projects)
                }, function (error) {
                    deferred.reject(error)
                });
            } else {
                deferred.resolve(projects)
            }

            return deferred.promise;
        };

        var _findProjectByName = function (name, projects) {
            return _.find(projects, function (p) {
                return p.fields.name === name;
            });
        };

        this.getProject = function (name) {
            var deferred = $q.defer();

            // FIXME get single project
            var projects = JSON.parse($window.sessionStorage.getItem("projects"));
            if (!projects) {
                this.getProjects().then(function (data) {
                    var project = _findProjectByName(name, projects);

                    deferred.resolve(project)
                }, function (error) {
                    deferred.reject(error)
                });
            } else {
                var project = _findProjectByName(name, projects);
                deferred.resolve(project);
            }

            return deferred.promise;
        };

        this.getProjectIndex = function (name) {

            var projects = JSON.parse($window.sessionStorage.getItem("projects"));

            var index = _.findIndex(projects, function (project) {
                return name === project.fields.name
            });

            return index;
        };
    }]);