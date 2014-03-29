// Use this file to *create* an AngularJS module for your app and configure $routeProvider.
///<reference path='refs.ts'/>
var auction;
(function (auction) {
    'use strict';
    angular.module('auction', ['ngRoute']).config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            }).when('/search', {
                templateUrl: 'views/search.html',
                controller: 'SearchController'
            }).otherwise({
                redirectTo: '/'
            });
        }]);
})(auction || (auction = {}));
//# sourceMappingURL=app.js.map
