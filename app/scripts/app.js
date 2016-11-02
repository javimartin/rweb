'use strict';

var scroll_start = 0;
var startchange = $('.main-content');
var offset = startchange.offset();
if (startchange.length) {
    $(document).scroll(function () {
        scroll_start = $(this).scrollTop();
        if (scroll_start > offset.top) {
            $(".logo-r").css('opacity', '0.3');
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
    'myApp.post'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/'});

}]).controller('AppController', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
    var vm = this;

    vm.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };

    vm.go = function (path) {
        $anchorScroll();
       // $location.path(path);
    };

}]);