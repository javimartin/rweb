'use strict';

var scroll_start = 0;
var startchange = $('.main-content');
var offset = startchange.offset();
if (startchange.length) {
    $(document).scroll(function () {
        scroll_start = $(this).scrollTop();
        if (scroll_start > offset.top) {
            $(".logo-r").css('opacity', '0');
        } else {
            $('.logo-r').css('opacity', '1');
        }
    });
}


// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngSanitize',
    'ngAnimate',
    'ngRoute',
    'myApp.home',
    'myApp.about',
    'myApp.contact',
    'myApp.project',
    'myApp.projectsService'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/'});

}]).controller('AppController', ['$scope', '$location', '$anchorScroll', '$window', function ($scope, $location, $anchorScroll, $window) {
    var vm = this;

    vm.isActive = function (viewLocation) {
        var locationPath = $location.path();
        return (viewLocation === locationPath || (locationPath.includes("/project/") && viewLocation === "/"));
    };

    vm.go = function (path) {
        $anchorScroll();
    };

}]);