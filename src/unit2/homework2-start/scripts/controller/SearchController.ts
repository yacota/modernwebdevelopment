// Implement SearchController here. It should manage Search Results page.
///<reference path='../refs.ts'/>

module auction.controller {
    'use strict';
    import m = auction.model;
    import s = auction.service;

    export class SearchController {
        static $inject = ['$scope', 'ProductService'];

        constructor(private $scope, private service :s.ProductService){
            this.service.getSearch().then((realProductsList) =>
                    $scope.model = {
                        "heading" : realProductsList.heading,
                        "items"   : realProductsList.items
                    }
            );
        }

        public static resolve = {
            productList : ['ProductService', function(productService :s.ProductService){
                return productService.getSearch();
            }]
        }
    }

    angular.module('auction').controller('SearchController', SearchController);
}