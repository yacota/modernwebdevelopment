///<reference path='../refs.ts'/>

module auction.controller {
    'use strict';
    import m = auction.model;
    import s = auction.service;

    export class ProductController {
        static $inject = ['$scope', 'product'];

        public isSearchFormShown = false;

        constructor(private $scope, public product:m.ProductModel){
            $scope.model = {
                "product" : product,
                "isSearchFormShown"   : this.isSearchFormShown
            }
        }

        public static resolve = {
            product : ['ProductService','$route', function(productService:s.ProductService, $route) {
                return productService.getProductById($route.current.params.id);
            }]
        }

    }

    angular.module('auction').controller('ProductCtrl', ProductController);
}