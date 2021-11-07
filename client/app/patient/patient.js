'use strict';

angular.module('MeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('association', {
        title: 'Add, Remove, Edit Patients',
        url: '/association',
        templateUrl: 'app/patient/patient.html',
        controller: 'PatientCtrl',
        authenticate: true
      });
  });
