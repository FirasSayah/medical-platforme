'use strict';

angular.module('MeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        title: 'Login to ',
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('loginAdmin', {
        title: 'loginAdmin to ',
        url: '/loginAdmin',
        templateUrl: 'app/account/loginAdmin/loginAdmin.html',
        controller: 'LoginAdminCtrl'
      })
      .state('loginDoctor', {
        title: 'loginDoctor to ',
        url: '/loginDoctor',
        templateUrl: 'app/account/loginDoctor/loginDoctor.html',
        controller: 'LoginDoctorCtrl'
      })
      .state('loginHotel', {
        title: 'loginHotel to ',
        url: '/loginHotel',
        templateUrl: 'app/account/loginHotel/loginHotel.html',
        controller: 'LoginHotelCtrl'
      })
      .state('signup', {
        title: 'Signup for ',
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('loginAgency', {
        title: 'loginAgency to ',
        url: '/loginAgency',
        templateUrl: 'app/account/loginAgency/loginAgency.html',
        controller: 'LoginAgencyCtrl'
      })
      .state('settingsAgency', {
        title: 'settingsAgency - Change Password ',
        url: '/settingsAgency',
        templateUrl: 'app/account/settingsAgency/settingsAgency.html',
        controller: 'SettingsAgencyCtrl'
      })
      .state('create', {
        title: 'Create for ',
        url: '/create',
        templateUrl: 'app/account/admin_create/create.html',
        controller: 'CreateCtrl',
        authenticate: true
      })
      .state('settingsHotel', {
        title: 'settingsHotel - Change Password ',
        url: '/settingsHotel',
        templateUrl: 'app/account/settingsHotel/settingsHotel.html',
        controller: 'SettingsHotelCtrl'
      })
      .state('settings', {
        title: 'Settings - Change Profil ',
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      });
  });
