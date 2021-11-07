'use strict';

angular.module('MeanApp')
  .controller('SettingsHotelCtrl', function ($scope,$window,$rootScope, User, Auth) {
    $scope.errors = {};
    $rootScope.isLoggedIn = Auth.isLoggedIn;
    $rootScope.isAdmin = Auth.isAdmin;
    $rootScope.isAssociation = Auth.isAssociation;
    $rootScope.isDoctor = Auth.isDoctor;
    $rootScope.isTravel = Auth.isTravel;
    $scope.lol=Auth.getCurrentUser().location;
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.changePassword = function(form) {
      $scope.lol=$window.loca;
      console.log("aaaa");
      console.log($window.loca);
      $scope.submitted = true;
      console.log($scope.user.newlocation);
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword,$scope.user.newName,$scope.user.neweMail,$scope.user.newphone,$scope.user.newaddress,$scope.user.newspeciality,$scope.user.newcapacity,$window.loca,$scope.user.newdepartureDate)
          .then( function() {
            $scope.message = 'Profile successfully changed.';
          })
          .catch( function() {
            form.password.$setValidity('mongoose', false);
            $scope.errors.other = 'Incorrect password';
            $scope.message = '';
          });

      $window.location.href = "/hotel";

    };

  });
