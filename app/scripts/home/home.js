'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'scripts/home/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        });
    }])

    .controller('HomeController', ['projectsService', '$location', function (projectsService, $location) {
        var vm = this;

        var post = {
            "title": "Projecto",
            "thumbnail": "http://placehold.it/1000x750",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias, consequuntur corporis facilis fuga magnam necessitatibus praesentium provident suscipit veniam. Dignissimos distinctio molestias neque nobis quidem quod sunt totam ullam. <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum dolor doloremque eaque eligendi expedita fugit inventore ipsum, neque, nihil non quam ratione repellendus tenetur ullam. Hic ipsam optio quas!"
        };

        vm.init = function () {

            projectsService.getProjects().then(function (data) {
                vm.projects = data;


                for (var i = 2; i < 9; i++) {
                    var postLoop = angular.copy(post);

                    postLoop.title = postLoop.title + " " + (i + 1);

                    postLoop.name = postLoop.title.replace(/\s/g, '-').toLowerCase();

                    if (i === 2) {
                        postLoop.thumbnail = "https://c2.staticflickr.com/6/5618/30509660280_b5c93e56a3_o.png"
                    }

                    vm.projects.push(postLoop);
                }

            }, function (error) {
                // show error
            });

        };

        vm.init();

    }]);