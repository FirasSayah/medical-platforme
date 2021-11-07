'use strict';

angular.module('MeanApp')
  .controller('LoginAgencyCtrl', function ($scope, Auth, $location, $window) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        if(Auth.login({
            email: $scope.user.email,
            password: $scope.user.password
          }))
        {
          if (Auth.isHotel()){
            Auth.redirectToAttemptedUrl("/agency");
          }
          else {
            $window.location.href = "/agency";          }
        }
        else
          $scope.errors.other = 'Incorrect email or password';
        $scope.message = '';
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
