'use strict';

/**
 * Service handling the connection to Contentful CMS API to retrieve project info.
 */
angular.module('myApp.projectsService', [])
    .service('projectsService', ["$window", "$q", function ($window, $q) {
        var client = contentful.createClient({
            space: 'fvqgat31yo0h',
            accessToken: '105b53ff041218ff0f02b193dd99a1484612ad4d838a586271874af3e34c054f'
        });
        var contentfulPostTypeId = "2wKn6yEnZewu2SCCkus4as";

        var projects;

        /* Returns a project from given projects object based on the name. */
        var _findProjectByName = function (name, projects) {
            return _.find(projects, function (p) {
                return p.fields.name === name;
            });
        };

        /* Orders the results on descending order based on .fields.order field. */
        var _processProjects = function (projects) {
            return _.orderBy(projects, function (p) {
                return p.fields.order;
            }, ["desc"]);
        };

        /* Calls contentful API to retrieve the objects of type post, stores them in projects service var. */
        this.getProjects = function () {
            var deferred = $q.defer();

            if (!projects || _.isUndefined(projects)) {
                client.getEntries({
                    'content_type': contentfulPostTypeId
                }).then(function (data) {
                    projects = _processProjects(data.items);

                    deferred.resolve(projects)
                }, function (error) {
                    deferred.reject(error)
                });
            } else {
                deferred.resolve(projects)
            }

            return deferred.promise;
        };

        /* Returns single project from projects var (calls getProjects method). */
        this.getProject = function (name) {
            var deferred = $q.defer();

            // FIXME get single project from service?
            this.getProjects().then(function (data) {
                var project = _findProjectByName(name, projects);

                deferred.resolve(project)
            }, function (error) {
                deferred.reject(error)
            });

            return deferred.promise;
        };

        /* Returns the index of the array of a project matching the input name. */
        this.getProjectIndex = function (name) {

            var index = _.findIndex(projects, function (project) {
                return name === project.fields.name
            });

            return index;
        };
    }]);