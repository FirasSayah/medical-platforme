'use strict';

angular.module('MeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('SearchCases', {
        title: 'Tourisme Medical',
        url: '/SearchCases',
        templateUrl: 'app/searchcases/searchcases.html',
        controller: 'SearchCasesCtrl',
        params: {
          sort: null
        }
      })
      .state('caseDetail', {
        title: 'Details of selected patient',
        params: {
          id: null
        },
        url: '/case/:_id',
        templateUrl: 'app/searchcases/case-details.html',
        controller: 'CaseDetailsCtrl'
      })
      .state('SubPatient', {
        title: 'All patients under current doctor or tookencasesmanagement',
        url: '/:page/:_id',
        templateUrl: 'app/searchcases/searchcases.html',
        controller: 'SearchCasesCtrl',
        params: {
          id: null,
          sort: null,
          brand: null,
          Travel_Agenciesry: null

        }
      });
  });
