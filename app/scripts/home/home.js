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

        vm.projects = [
            {
                "name": "september-vacations",
                "title": "September Vacations",
                "thumbnail": "https://c2.staticflickr.com/6/5800/30810552575_8c3e750455_o.png",
                "text": "<p>September Vacations is a personal project developed during a trip along Bolivia, Chile and Argentina in September 2016. This collection illustrates a selection of the breathtaking landscapes during the route. </p>",
                "images": [{"url": "/assets/img/projects/september-vacations/september-vacations1.png"},
                    {"url": "/assets/img/projects/september-vacations/september-vacations2.png"},
                    {"url": "/assets/img/projects/september-vacations/september-vacations3.png"},
                    {"url": "/assets/img/projects/september-vacations/september-vacations4.png"}]
            },
            {
                "name": "vortex-identity",
                "title": "Vortex Identity",
                "thumbnail": "https://c2.staticflickr.com/6/5593/30175559503_4b26b0b620_o.png",
                "text": "<p>The Vortex Project is my architecture final project, developed with my colleagues Sandra and Laura.</p><p>Vortex proposes a new domestic system, based in the co-living concept, that makes available to the user a fragmented and multi-localized home in constant change.</p><p>We created the entire brand identity. We wanted a very simple concept, giving the word “Vortex” the main role. The corporate image is a monogram created with the first and the last letter of “Vortex”. We play with 3 funny colors to break with the stiffness of the logo. Besides, we designed avatars to represent the users in the project.</p>",
                "images": [{"url": "/assets/img/projects/vortex-identity/vortextidentity-1.png"},
                    {"url": "/assets/img/projects/vortex-identity/vortextidentity2.png"},
                    {"url": "/assets/img/projects/vortex-identity/vortextidentity3.png"},
                    {"url": "/assets/img/projects/vortex-identity/vortextidentity4.png"},
                    {"url": "/assets/img/projects/vortex-identity/vortextidentity5.png"},
                    {"url": "/assets/img/projects/vortex-identity/vortextidentity6.png"}]
            }
        ];


        var post = {
            "title": "Projecto",
            "thumbnail": "http://placehold.it/380x280",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias, consequuntur corporis facilis fuga magnam necessitatibus praesentium provident suscipit veniam. Dignissimos distinctio molestias neque nobis quidem quod sunt totam ullam. <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum dolor doloremque eaque eligendi expedita fugit inventore ipsum, neque, nihil non quam ratione repellendus tenetur ullam. Hic ipsam optio quas!"
        };

        for (var i = 2; i < 7; i++) {
            var postLoop = angular.copy(post);

            postLoop.title = postLoop.title + " " + (i + 1);

            postLoop.name = postLoop.title.replace(/\s/g, '-').toLowerCase();

            if (i === 2) {
                postLoop.thumbnail = "https://c2.staticflickr.com/6/5618/30509660280_b5c93e56a3_o.png"
            }

            if (i % 2 === 0 && i !== 2) {
                postLoop.thumbnail = "/assets/img/project1.png"

            } else if (i !== 2) {
                postLoop.thumbnail = "https://c3.staticflickr.com/6/5449/30178184474_a84c75a9b6_o.jpg"

            }

            vm.projects.push(postLoop);
        }

    }]);