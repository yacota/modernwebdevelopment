// Implement HomeController here. It should manage Home page.
///<reference path='../refs.ts'/>

module auction.controller {
    'use strict';
    import m = auction.model;
    import s = auction.service;

    export class HomeController {
        static $inject = ['$scope', 'ProductService'];

        constructor(private $scope, private service :s.ProductService){
            this.service.getFeatured().then((realProductsList) =>
                    $scope.model = {
                        "heading" : realProductsList.heading,
                        "items"   : realProductsList.items
                    }
            );
        }

        //public static resolve = {
        //    productList : ['ProductService', function(productService :s.ProductService){
        //        return productService.getFeatured();
        //    }]
        //}

    }

    angular.module('auction').controller('HomeController', HomeController);
}
