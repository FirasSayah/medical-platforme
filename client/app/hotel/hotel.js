'use strict';

angular.module('MeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('hotel', {
        title: 'Tourisme Medical',
        url: '/hotel',
        templateUrl: 'app/hotel/hotel.html',
        controller: 'HotelCtrl',
        params: {
          sort: null
        },authenticate: true
      })
      .state('patientDetail', {
        title: 'Details of patient',
        params: {
          id: null,
          slug: null
        },
        url: '/p',
        templateUrl: 'app/hotel/patient-details.html',
        controller: 'PatientDetails1Ctrl',
        authenticate: true
      })
      .state('alreadyin', {
        title: 'Already IN',
        url: '/alreadyin',
        templateUrl: 'app/hotel/alreadyin.html',
        controller: 'HotelCtrl',
        authenticate: true
      })
      .state('patientDetails', {
        title: 'Details of patient',
        params: {
          id: null,
          slug: null
        },
        url: '/a',
        templateUrl: 'app/hotel/patient-detail.html',
        controller: 'PatientDetails1Ctrl',
        authenticate: true
      });
  });
