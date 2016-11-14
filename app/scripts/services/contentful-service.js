'use strict';

/**
 * Service handling the connection to Contentful CMS API to retrieve project info.
 */
angular.module('myApp.contentfulService', [])
    .service('contentfulService', ["$window", "$q", function ($window, $q) {
        var client = contentful.createClient({
            space: 'fvqgat31yo0h',
            accessToken: '105b53ff041218ff0f02b193dd99a1484612ad4d838a586271874af3e34c054f'
        });
        var contentfulPostTypeId = "2wKn6yEnZewu2SCCkus4as";
        var aboutPageId = "25n2U0xKUMucU6eYKCUcea";
        var contactPageId = "lN0fiFrX3wqOYaGCeIGas";
        var textHomePageId = "6BszYZh2uWsUIky2SYMo4k";

        var projects;
        var aboutPageContent;
        var contactPageContent;
        var textHomePage;

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

        /* Calls contentful API to retrieve the object about page, stores them in about page var. */
        this.getAboutPageContent = function () {
            var deferred = $q.defer();

            if (!aboutPageContent || _.isUndefined(aboutPageContent)) {
                client.getEntry(aboutPageId).then(function (data) {
                    aboutPageContent = data;

                    deferred.resolve(aboutPageContent)
                }, function (error) {
                    deferred.reject(error)
                });
            } else {
                deferred.resolve(aboutPageContent)
            }

            return deferred.promise;
        };

        /* Calls contentful API to retrieve the object contact page, stores them in about page var. */
        this.getContactPageContent = function () {
            var deferred = $q.defer();

            if (!contactPageContent || _.isUndefined(contactPageContent)) {
                client.getEntry(contactPageId).then(function (data) {
                    contactPageContent = data;

                    deferred.resolve(contactPageContent)
                }, function (error) {
                    deferred.reject(error)
                });
            } else {
                deferred.resolve(contactPageContent)
            }

            return deferred.promise;
        };


        /* Calls contentful API to retrieve the object text home page, stores them in about page var. */
        this.getTextHomePage = function () {
            var deferred = $q.defer();

            if (!textHomePage || _.isUndefined(textHomePage)) {
                client.getEntry(textHomePageId).then(function (data) {
                    textHomePage = data;

                    deferred.resolve(textHomePage)
                }, function (error) {
                    deferred.reject(error)
                });
            } else {
                deferred.resolve(textHomePage)
            }

            return deferred.promise;
        };
    }]);