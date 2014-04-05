/// <reference path='refs.ts'/>

'use strict';

module auction {

  interface IRootScope extends ng.IRootScopeService {
    title: string;
  }

  angular.module('auction', ['ngRoute'])
    .config(($routeProvider: ng.route.IRouteProvider) => {
      var title = (t) => t + ' | Auction';

      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl',
          title: title('Home')
        })
        .when('/search', {
          templateUrl: 'views/search.html',
          controller: 'SearchCtrl',
          title: title('Search')
        })
        .when('/product/:id', {
          templateUrl: 'views/product.html',
          controller: 'ProductCtrl',
          title: title('Product'),
          resolve: auction.controller.ProductController.resolve
        })
        .otherwise({
          redirectTo: '/'
        });
    })
    .run(['$rootScope', ($rootScope: IRootScope) => {
      $rootScope.$on('$routeChangeStart', function (event, next) {
        $rootScope.title = next.title;
      });
    }]);
}
