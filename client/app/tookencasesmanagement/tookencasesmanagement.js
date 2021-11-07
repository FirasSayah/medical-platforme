'use strict';

angular.module('MeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tookencasesmanagement', {
        title: 'Add, Remove, Edit TookenCases',
        url: '/tookencasesmanagement',
        templateUrl: 'app/tookencasesmanagement/tookencasesmanagement.html',
        controller: 'TookenCasesCtrl'
        //authenticate: true
      });
  });
