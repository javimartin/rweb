'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'scripts/home/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        });
    }])

    .controller('HomeController', [function () {
        var vm = this;

        vm.projects = [];

        var post = {
            "title": "Projecto",
            "thumbnail": "http://placehold.it/380x280",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias, consequuntur corporis facilis fuga magnam necessitatibus praesentium provident suscipit veniam. Dignissimos distinctio molestias neque nobis quidem quod sunt totam ullam. <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum dolor doloremque eaque eligendi expedita fugit inventore ipsum, neque, nihil non quam ratione repellendus tenetur ullam. Hic ipsam optio quas!"
        };

        for (var i = 0; i < 10; i++) {
            var postLoop = angular.copy(post);
            if (i == 0) {
                postLoop.title = "September Vacations"
            } else if (i == 1) {
                postLoop.title = "Vortex Identity"
            } else {
                postLoop.title = postLoop.title + " " + (i + 1);
            }

            postLoop.name = postLoop.title.replace(/\s/g, '-').toLowerCase();

            if (i % 2 === 0) {
                postLoop.thumbnail = "/assets/img/project1.png"

            } else {
                postLoop.thumbnail = "/assets/img/project2.png"

            }

            vm.projects.push(postLoop);
        }

    }]);