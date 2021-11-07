'use strict';

angular.module('MeanApp')
  .controller('LoginHotelCtrl', function ($scope, Auth, $location, $window) {
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
            Auth.redirectToAttemptedUrl("/hotel");
          }
          else {
            $window.location.href = "/hotel";
          }


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
