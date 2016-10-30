'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'scripts/contact/contact.html',
    controller: 'ContactController',
    controllerAs: 'contactCtrl'
  });
}]).controller('ContactController', [function () {

}]);