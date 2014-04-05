/// <reference path='../refs.ts'/>

module auction.directive {
  'use strict';

  function searchDirective() {
    return {
      scope: true,
      restrict: 'E',
      templateUrl: 'views/partial/searchform.html'
    };
  }

  angular.module('auction').directive('auctionSearch', searchDirective);
}

