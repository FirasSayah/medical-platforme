'use strict';

angular.module('MeanApp')
  .controller('LoginDoctorCtrl', function ($scope, Auth, $location, $window,$rootScope) {
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


                  if (Auth.isDoctor()){
                    Auth.redirectToAttemptedUrl("/SearchCases");
                  }

                  else {
                      $window.location.href = "/SearchCases";
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

