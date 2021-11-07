'use strict';

angular.module('MeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contact', {
        title: 'Contact Information',
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl'
      });
  });
