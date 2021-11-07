'use strict';

angular.module('MeanApp')
  .controller('TookenCasesCtrl', function ($scope, $rootScope, $http, Auth, User, socket, $stateParams, $location, $state, $injector) {
    $scope.getCurrentUser = Auth.getCurrentUser();
    $scope.activePatient = {};
    $scope.changeActivePatient = changeActivePatient;
    $scope.search="";


      $http.get('api/users/showTookenCases/' + $scope.getCurrentUser._id).then(function(response){
        $scope.cases= response.data;
      });



    $scope.deleteCase = function (userId, caseId) {
      console.log(userId, caseId);
      var request = {userId: userId,
        patientId:caseId};
      $http.post('api/users/deleteCase/',request).then(function(){
        console.log("deleting", caseId,"from", userId);
        var index = -1;
        var casesArr = eval($scope.cases);
        for( var i = 0; i < casesArr.length; i++ ) {
          if (casesArr[i]._id === caseId) {
            index = i;
            break;
          }
        }
        if( index === -1 ) {
          alert( "Case not found" );
        }
        $scope.cases.splice( index, 1 );
      })
    }

  $scope.PatientAddInformation = function (activePatientID,comment,date) {
      var request = {conclusion: comment,
        patientId:activePatientID,
      date:date};
      $http.post('api/users/PatientAddInformation', request).then(function(){
        console.log("patient updated");

      })

    }

    $scope.makeCritical = function (userId, caseId) {
      var request = {userId: userId,
        patientId:caseId};
      $http.post('api/users/makeCritical', request).then(function(){
        console.log("critical");

      })
      $state.reload();
    }

    function changeActivePatient(index){
      // simple function to attach the data of the turtle clicked on to
      // the active turtle object
      $scope.activePatient = index;
    }


  });
