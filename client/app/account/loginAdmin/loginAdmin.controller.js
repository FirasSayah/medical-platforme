'use strict';

angular.module('MeanApp')
  .controller('LoginAdminCtrl', function ($scope, Auth, $location, $window,$rootScope) {
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
                  else {
                      $window.location.href = "/customer";
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

