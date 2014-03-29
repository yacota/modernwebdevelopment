// Use this file to *create* an AngularJS module for your app and configure $routeProvider.
///<reference path='refs.ts'/>

module auction {
    'use strict';
    angular.module('auction', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController'
                    //,resolve: auction.controller.HomeController.resolve
                })
                .when('/search', {
                    templateUrl: 'views/search.html',
                    controller: 'SearchController'
                    //,resolve: auction.controller.SearchController.resolve
                })
                .otherwise({
                    redirectTo: '/'
                });
    }]);
}
