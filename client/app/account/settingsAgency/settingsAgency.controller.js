'use strict';

angular.module('MeanApp')
  .controller('SettingsAgencyCtrl', function ($scope,$rootScope, User, Auth) {
    $scope.errors = {};
    $rootScope.isLoggedIn = Auth.isLoggedIn;
    $rootScope.isAdmin = Auth.isAdmin;
    $rootScope.isAssociation = Auth.isAssociation;
    $rootScope.isDoctor = Auth.isDoctor;
    $rootScope.isTravel = Auth.isTravel;
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword,$scope.user.newName,$scope.user.neweMail,$scope.user.newphone,$scope.user.newaddress,$scope.user.newspeciality,$scope.user.newcapacity,$scope.user.newlocation,$scope.user.newdepartureDate,$scope.user.newdepartureDate2,$scope.user.newdepartureDate3)
          .then( function() {
            $scope.message = 'Profile successfully changed.';
          })
          .catch( function() {
            form.password.$setValidity('mongoose', false);
            $scope.errors.other = 'Incorrect password';
            $scope.message = '';
          });
      }
    };

  });
