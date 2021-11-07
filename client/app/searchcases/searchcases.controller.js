'use strict';

angular.module('MeanApp')
  .controller('CaseDetailsCtrl', function ($scope, $rootScope, $http, Patient, Clinic, Doctor, Auth, User, growl, socket, $stateParams, $location, $state, $injector) {
    var id = $stateParams.id;


    $scope.getCurrentUser = Auth.getCurrentUser;
    //$scope.cases = Auth.getCurrentUser.patients.length;
    $scope.isDisabled = false;



    $scope.takeCase = function (userId, patientId) {
      var request = {userId: userId,
                 patientId:patientId};
      $http.post('api/users/takeCase', request).then(function(){
        console.log("adding", patientId);
      })
      growl.success('we hope that you maintain a professional rapport with patients, uphold patient dignity, and respect his privacy.',{title: 'thank you Doctor for helping us.'});
      $scope.isDisabled = true;
    }

    // var slug = $stateParams.slug;
    // Storing the patient id into localStorage because the _id of the selected patient which was passed as a hidden parameter from patients won't available on page refresh
    if (localStorage !== null && JSON !== null && id !== null) {
        localStorage.patientId = id;
    }
    var patientId = localStorage !== null ? localStorage.patientId : null;

    $scope.patient = Patient.get({id:patientId},function(data) {
      socket.syncUpdates('patient', $scope.data);
      generateBreadCrumb('Doctor',data.doctor._id);
    });
    $scope.doctors = Doctor.all.query();
    // To shuffle throught different patient variants
    $scope.i=0;
    $scope.changeIndex =function(i){
        $scope.i=i;
    };

    // The searchcases function to navigate to a page with some hidden parameters
    $scope.navigate = function(page,params){
      if(params){
        $location.replace().path(page+'/'+params.slug+'/'+params._id);
      }else{
        $location.replace().path('/');
      }
    };

    // Function to generate breadcrumb for doctor and tookencasesmanagement
    // Future: Put it inside a directive
    var generateBreadCrumb = function(page, id){
      $scope.breadcrumb = {};
      $scope.breadcrumb.items = [];
      var api = $injector.get(page);
      api.get({id:id}).$promise.then(function(child){
        $scope.breadcrumb.items.push(child);
        // var p = child.parent;
        // if(p != null){findBrandPath(1);}
        if(page==='Doctor'){
          $scope.breadcrumb.items.push({name:'All doctors'});
        }
        else if(page==='Association'){
          $scope.breadcrumb.items.push({name:'All Associations'});
        }
      });
    };

  })

  .controller('SearchCasesCtrl', function ($scope, $state, $stateParams, $location, Patient, Auth, socket, $rootScope, $injector, $loading) {

    if ($stateParams.patientsku) { // != null
        $scope.patient = $scope.store.getPatient($stateParams.patientsku);
    }


    $scope.getCurrentUser = Auth.getCurrentUser;

// For Price slider
    $scope.patients =Patient.query();
    $scope.patients.items =Patient.query();
    console.log(Patient.query());


});
