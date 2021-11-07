'use strict';

angular.module('MeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('agency', {
        title: 'Travel agency',
        url: '/agency',
        templateUrl: 'app/agency/agency.html',
        controller: 'AgencyCtrl',
        params: {
          sort: null
        },authenticate: true
      })
      .state('patientDetail1', {
        title: 'Details of patient',
        params: {
          id: null,
          slug: null
        },
        url: '/p/:slug',
        templateUrl: 'app/agency/patient-details1.html',
        controller: 'PatientDetails11Ctrl',
        authenticate: true
      })
      .state('alreadyin1', {
        title: 'Already IN',
        url: '/alreadyin1',
        templateUrl: 'app/agency/alreadyin1.html',
        controller: 'AgencyCtrl',
        authenticate: true
      })
      .state('patientDetails1', {
        title: 'Details of patient',
        params: {
          id: null,
          slug: null
        },
        url: '/s/:slug',
        templateUrl: 'app/agency/patient-detail1.html',
        controller: 'PatientDetails11Ctrl',
        authenticate: true
      });
  });
