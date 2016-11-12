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
    'myApp.projectsService',
    'myApp.storageService'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/'});

}]).controller('AppController', ['$rootScope', '$scope', '$location', '$anchorScroll', '$window', 'storageService', '$route', function ($rootScope, $scope, $location, $anchorScroll, $window, storageService, $route) {
    var vm = this;

    var languageKey = "lang";
    var languageNav = {
        "EN": ["projects", "about", "contact", "prev", "next"],
        "FR": ["projets", "à propos", "contact", "précédent", "suivant"],
        "ES": ["proyectos", "sobre mi", "contacto", "anterior", "siguiente"]
    };

    init();

    function init () {
        $rootScope.lang = "EN";
        $rootScope.navigation = languageNav[$rootScope.lang];

        var languageStored = storageService.get(languageKey);
        $rootScope.lang = languageStored ? languageStored : $rootScope.lang;
        $rootScope.navigation = languageStored ? languageNav[languageStored] : languageNav[$rootScope.lang];
    }

    vm.isActive = function (viewLocation) {
        var locationPath = $location.path();
        return (viewLocation === locationPath || (locationPath.includes("/project/") && viewLocation === "/"));
    };

    vm.isSelectedLanguage = function (language) {
        return $rootScope.lang === language;
    };

    vm.changeLanguage = function (language) {
        Pace.restart();

        $rootScope.lang = language;
        storageService.set(languageKey, language);

        $rootScope.navigation = languageNav[language];

        $anchorScroll();
        $route.reload();
    };

    vm.go = function (path) {
        Pace.restart();

        $anchorScroll();
        $location.path(path);
    };

}]);