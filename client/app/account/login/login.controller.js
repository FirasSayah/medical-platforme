'use strict';

angular.module('MeanApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $window,$rootScope) {
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


                  if (Auth.isAdmin()){
                    Auth.redirectToAttemptedUrl("/customer");
                  }
                    else if (Auth.isAssociation()) {
                    Auth.redirectToAttemptedUrl("/association");

                  }
                     else if (Auth.isDoctor()) {
                     Auth.redirectToAttemptedUrl("/SearchCases");

                  }
                  else {
                      $window.location.href = "/association";
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

