'use strict';

angular.module('MeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('customer', {
        title: 'Customers Details',
        url: '/customer',
        templateUrl: 'app/customer/customer.html',
        controller: 'CustomerCtrl',
        authenticate: true
      });
  });
