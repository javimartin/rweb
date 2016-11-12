'use strict';

angular.module('myApp.about', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'scripts/about/about.html',
            controller: 'AboutController',
            controllerAs: 'aboutCtrl'
        });
    }]).controller('AboutController', ['$rootScope', 'contentfulService', function ($rootScope, contentfulService) {
    var vm = this;

    vm.init = function () {

        contentfulService.getAboutPageContent().then(function (data) {


            // use the field body for EN, bodyFR for FR or bodyES for ES
            var body = ($rootScope.lang === "EN") ? "body" : "body" + $rootScope.lang;

            // if body is empty, use english as default
            vm.bodyContent = (_.isEmpty(data.fields[body])) ? data.fields["body"] : data.fields[body];

        }, function (error) {
            // TODO show error
        });
    };

    vm.init();
}]);