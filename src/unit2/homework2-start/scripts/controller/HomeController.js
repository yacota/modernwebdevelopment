// Implement HomeController here. It should manage Home page.
///<reference path='../refs.ts'/>
var auction;
(function (auction) {
    (function (controller) {
        'use strict';

        var HomeController = (function () {
            function HomeController($scope, service) {
                this.$scope = $scope;
                this.service = service;
                this.service.getFeatured().then(function (realProductsList) {
                    return $scope.model = {
                        "heading": realProductsList.heading,
                        "items": realProductsList.items
                    };
                });
            }
            HomeController.$inject = ['$scope', 'ProductService'];
            return HomeController;
        })();
        controller.HomeController = HomeController;

        angular.module('auction').controller('HomeController', HomeController);
    })(auction.controller || (auction.controller = {}));
    var controller = auction.controller;
})(auction || (auction = {}));
//# sourceMappingURL=HomeController.js.map
