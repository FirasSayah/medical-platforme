'use strict';

angular.module('MeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('trackpatient', {
        title: 'Add, Remove, Edit Patients',
        url: '/trackpatient',
        templateUrl: 'app/trackpatient/trackpatient.html',
        controller: 'TrackPatientCtrl',
        authenticate: true
      });
  });
