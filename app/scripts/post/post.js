'use strict';

angular.module('myApp.post', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/post/:post', {
            templateUrl: 'scripts/post/post.html',
            controller: 'PostController',
            controllerAs: 'postCtrl'
        });
    }])

    .controller('PostController', ['$routeParams', function ($routeParams) {
        var vm = this;

        var posts = [
            {
                "name": "september-vacations",
                "title": "September Vacations",
                "text": "<p>September Vacations is a personal project developed during a trip along Bolivia, Chile and Argentina in September 2016. This collection illustrates a selection of the breathtaking landscapes during the route. </p>",
                "images": [{"url": "/assets/img/projecto1/p1_1.png"}, {"url": "/assets/img/projecto1/p1_2.png"}, {"url": "/assets/img/projecto1/p1_3.png"}, {"url": "/assets/img/projecto1/p1_4.png"}]
            },
            {
                "name": "vortex-identity",
                "title": "Vortex Identity",
                "text": "<p>The Vortex Project is my architecture final project, developed with my colleagues Sandra and Laura.</p><p>Vortex proposes a new domestic system, based in the co-living concept, that makes available to the user a fragmented and multi-localized home in constant change.</p><p>We created the entire brand identity. We wanted a very simple concept, giving the word “Vortex” the main role. The corporate image is a monogram created with the first and the last letter of “Vortex”. We play with 3 funny colors to break with the stiffness of the logo. Besides, we designed avatars to represent the users in the project.</p>",
                "images": [{"url": "/assets/img/projecto2/p2_1.png"}, {"url": "/assets/img/projecto2/p2_2.png"}, {"url": "/assets/img/projecto2/p2_3.png"}, {"url": "/assets/img/projecto2/p2_4.svg"}]
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
            vm.post = _.find(posts, function (post) {
                return $routeParams.post === post.name;
            });
        };

        vm.init();
    }]);