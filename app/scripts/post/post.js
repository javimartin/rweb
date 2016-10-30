'use strict';

angular.module('myApp.post', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/post/:post', {
            templateUrl: 'scripts/post/post.html',
            controller: 'PostController',
            controllerAs: 'postCtrl'
        });
    }])

    .controller('PostController', [function () {
        var vm = this;

        vm.post = {
            "title": "Projecto",
            "thumbnail": "http://placehold.it/380x280",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias, consequuntur corporis facilis fuga magnam necessitatibus praesentium provident suscipit veniam. Dignissimos distinctio molestias neque nobis quidem quod sunt totam ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum dolor doloremque eaque eligendi expedita fugit inventore ipsum, neque, nihil non quam ratione repellendus tenetur ullam. Hic ipsam optio quas!",
            "images": [{"url": "http://placehold.it/1000x1000"}, {"url": "http://placehold.it/600x800"}, {"url": "http://placehold.it/600x800"}]
        };

    }]);