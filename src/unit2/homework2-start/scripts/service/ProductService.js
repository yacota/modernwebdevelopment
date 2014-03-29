// This file should contain ProductService implementation which is responsible for managing products.
// All other parts of the app shouldn't access data/*.json files directly, instead they should use this service.
var auction;
(function (auction) {
    // Leverage as many TypeScript features (classes, type annotations, lambdas, etc.)
    // as you can (and as it seems reasonable to you ;))
    ///<reference path='../refs.ts'/>
    (function (service) {
        'use strict';

        //hara llamada json
        var ProductService = (function () {
            function ProductService($http, $q) {
                this.$http = $http;
                this.$q = $q;
            }
            ProductService.prototype.getFeatured = function () {
                return this.getData('data/featured.json');
            };

            ProductService.prototype.getSearch = function () {
                return this.getData('data/search.json');
            };

            ProductService.prototype.getData = function (urlJSON) {
                console.log('ProductService retrieving->' + urlJSON);
                var deferredProducts = this.$q.defer();
                this.$http.get(urlJSON).success(function (data) {
                    return deferredProducts.resolve(data);
                }).error(function () {
                    return deferredProducts.reject();
                });
                return deferredProducts.promise;
            };
            ProductService.$inject = ['$http', '$q'];
            return ProductService;
        })();
        service.ProductService = ProductService;

        angular.module('auction').service('ProductService', ProductService);
    })(auction.service || (auction.service = {}));
    var service = auction.service;
})(auction || (auction = {}));
//# sourceMappingURL=ProductService.js.map
