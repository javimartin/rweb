'use strict';

angular.module('myApp.post', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/project/:project', {
            templateUrl: 'scripts/project/project.html',
            controller: 'ProjectController',
            controllerAs: 'projectCtrl'
        });
    }])

    .controller('ProjectController', ['$routeParams', '$location', '$anchorScroll', function ($routeParams, $location, $anchorScroll) {
        var vm = this;

        var projects = [
            {
                "name": "september-vacations",
                "title": "September Vacations",
                "text": "<p>September Vacations is a personal project developed during a trip along Bolivia, Chile and Argentina in September 2016. This collection illustrates a selection of the breathtaking landscapes during the route. </p>",
                "images": [{"url": "/assets/img/projects/september-vacations/september-vacations1.png"},
                    {"url": "/assets/img/projects/september-vacations/september-vacations2.png"},
                    {"url": "/assets/img/projects/september-vacations/september-vacations3.png"},
                    {"url": "/assets/img/projects/september-vacations/september-vacations4.png"}]
            },
            {
                "name": "vortex-identity",
                "title": "Vortex Identity",
                "text": "<p>The Vortex Project is my architecture final project, developed with my colleagues Sandra and Laura.</p><p>Vortex proposes a new domestic system, based in the co-living concept, that makes available to the user a fragmented and multi-localized home in constant change.</p><p>We created the entire brand identity. We wanted a very simple concept, giving the word “Vortex” the main role. The corporate image is a monogram created with the first and the last letter of “Vortex”. We play with 3 funny colors to break with the stiffness of the logo. Besides, we designed avatars to represent the users in the project.</p>",
                "images": [{"url": "/assets/img/projects/vortex-identity/vortexidentity1.png"},
                    {"url": "/assets/img/projects/vortex-identity/vortexidentity2.png"},
                    {"url": "/assets/img/projects/vortex-identity/vortexidentity3.png"},
                    {"url": "/assets/img/projects/vortex-identity/vortexidentity4.png"},
                    {"url": "/assets/img/projects/vortex-identity/vortexidentity5.png"},
                    {"url": "/assets/img/projects/vortex-identity/vortexidentity6.png"}]
            },
            {
                "title": "Projecto3",
                "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias, consequuntur corporis facilis fuga magnam necessitatibus praesentium provident suscipit veniam. Dignissimos distinctio molestias neque nobis quidem quod sunt totam ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum dolor doloremque eaque eligendi expedita fugit inventore ipsum, neque, nihil non quam ratione repellendus tenetur ullam. Hic ipsam optio quas!",
                "images": [{"url": "http://placehold.it/1000x1000"}, {"url": "http://placehold.it/600x800"}, {"url": "http://placehold.it/600x800"}]
            },
            {
                "title": "Projecto4",
                "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias, consequuntur corporis facilis fuga magnam necessitatibus praesentium provident suscipit veniam. Dignissimos distinctio molestias neque nobis quidem quod sunt totam ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum dolor doloremque eaque eligendi expedita fugit inventore ipsum, neque, nihil non quam ratione repellendus tenetur ullam. Hic ipsam optio quas!",
                "images": [{"url": "http://placehold.it/1000x1000"}, {"url": "http://placehold.it/600x800"}, {"url": "http://placehold.it/600x800"}]
            }
        ];

        vm.init = function () {

            vm.index = _.findIndex(projects, function (project) {
                return $routeParams.project === project.name
            });

            // FIXME
            vm.project = projects[vm.index];

            // FIXME
            vm.hasNext = (vm.index < projects.length);
            vm.hasPrev = (vm.index > 0);
        };

        vm.prev = function () {
            // FIXME
            var index = vm.index - 1;
            var path = "/project/" + projects[index].name;
            $anchorScroll();
            $location.path(path);
        };

        vm.next = function () {
            // FIXME
            var index = vm.index + 1;
            var path = "/project/" + projects[index].name;
            $anchorScroll();
            $location.path(path);
        };

        vm.init();
    }]);