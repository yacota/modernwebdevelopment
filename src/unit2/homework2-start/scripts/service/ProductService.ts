// This file should contain ProductService implementation which is responsible for managing products.
// All other parts of the app shouldn't access data/*.json files directly, instead they should use this service.

// Leverage as many TypeScript features (classes, type annotations, lambdas, etc.)
// as you can (and as it seems reasonable to you ;))
///<reference path='../refs.ts'/>

module auction.service {

    'use strict';

    import m = auction.model;

    //hara llamada json
    export class ProductService {
        public static $inject = ['$http', '$q'];

        constructor(private $http : ng.IHttpService, private $q: ng.IQService) {}

        public getFeatured() : ng.IPromise<m.ProductListModel> {
            return this.getData('data/featured.json');
        }

        public getSearch() : ng.IPromise<m.ProductListModel> {
            return this.getData('data/search.json');
        }

        private getData(urlJSON) : ng.IPromise<m.ProductListModel> {
            console.log('ProductService retrieving->'+urlJSON);
            var deferredProducts = this.$q.defer();
            this.$http.get(urlJSON)
                .success((data) => deferredProducts.resolve(<m.ProductListModel>data))
                .error(() => deferredProducts.reject());
            return deferredProducts.promise;
        }
    }

    angular.module('auction').service('ProductService', ProductService);
}