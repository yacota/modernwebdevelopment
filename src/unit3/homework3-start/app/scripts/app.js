/// <reference path='refs.ts'/>
'use strict';
var auction;
(function (auction) {
    angular.module('auction', ['ngRoute']).config(function ($routeProvider) {
        var title = function (t) {
            return t + ' | Auction';
        };

        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            title: title('Home')
        }).when('/search', {
            templateUrl: 'views/search.html',
            controller: 'SearchController',
            title: title('Search')
        }).otherwise({
            redirectTo: '/'
        });
    }).run([
        '$rootScope', function ($rootScope) {
            $rootScope.$on('$routeChangeStart', function (event, next) {
                $rootScope.title = next.title;
            });
        }]);
})(auction || (auction = {}));
//# sourceMappingURL=app.js.map
