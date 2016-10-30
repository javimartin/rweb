'use strict';

angular.module('myApp.about', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'scripts/about/about.html',
            controller: 'AboutController',
            controllerAs: 'aboutCtrl'
        });
    }]).controller('AboutController', [function () {

}]);