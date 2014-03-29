// Implement SearchController here. It should manage Search Results page.
///<reference path='../refs.ts'/>
var auction;
(function (auction) {
    (function (controller) {
        'use strict';

        var SearchController = (function () {
            function SearchController($scope, service) {
                this.$scope = $scope;
                this.service = service;
                this.service.getSearch().then(function (realProductsList) {
                    return $scope.model = {
                        "heading": realProductsList.heading,
                        "items": realProductsList.items
                    };
                });
            }
            SearchController.$inject = ['$scope', 'ProductService'];

            SearchController.resolve = {
                productList: [
                    'ProductService', function (productService) {
                        return productService.getSearch();
                    }]
            };
            return SearchController;
        })();
        controller.SearchController = SearchController;

        angular.module('auction').controller('SearchController', SearchController);
    })(auction.controller || (auction.controller = {}));
    var controller = auction.controller;
})(auction || (auction = {}));
//# sourceMappingURL=SearchController.js.map
