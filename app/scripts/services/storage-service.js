'use strict';

/**
 * Service wrapper for sessionStorage, store JSON objects and retrieves JSON object
 */
angular.module("myApp.storageService", [])
    .service("storageService", ["$window", function ($window, $q) {

        this.set = function (key, object) {
            $window.sessionStorage.setItem(key, JSON.stringify(object));
        };

        this.get = function (name) {
            return JSON.parse($window.sessionStorage.getItem(name));
        };
    }]);