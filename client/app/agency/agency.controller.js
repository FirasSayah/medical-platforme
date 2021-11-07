'use strict';

angular.module('MeanApp')
  .controller('PatientDetails11Ctrl', function ($scope,Auth, $rootScope, Patient,Agency, socket, $stateParams, $location, $state, $injector) {
    var id = $stateParams.id;
    // var slug = $stateParams.slug;
    // Storing the patient id into localStorage because the _id of the selected patient which was passed as a hidden parameter from patients won't available on page refresh
    if (localStorage !== null && JSON !== null && id !== null) {
      localStorage.patientId = id;
    }
    var patientId = localStorage !== null ? localStorage.patientId : null;


    $scope.deleteH = function(b){ // success handler

      if (b.in=='agency')
      {
      b.in ="doctor";

        Agency.delete({id:b._id}).$promise;
        Patient.update({ id:b._id, }, b).$promise;
      }
      else
      {
      b.in="agency";
      console.log(Auth.getCurrentUser()._id );
      var agency={};
        agency.patient_name=agency.lastName;
      agency._id=b._id;
      agency.patient_id=b._id;
      agency.patient_cin= b.cin;
      agency.patient_from=b.from;
      agency.patient_age=b.age;
      agency.patient_gender= b.gender;
      agency.parent_critical=b.citical;
      agency.patient_to=b.to;
      agency.association_id= b.uid;
      agency.agency_id= Auth.getCurrentUser()._id ;
      agency.in="agency";
      console.log(agency.agency_id);
      Agency.save(agency).$promise;
      Patient.update({ id:b._id }, b).$promise
      }
      };



    $scope.patient = Patient.get({id:patientId},function(data) {
      socket.syncUpdates('patient', $scope.data);
    });

    $scope.i=0;
    $scope.changeIndex =function(i){
      $scope.i=i;
    };

    // The main function to navigate to a page with some hidden parameters
    $scope.navigate = function(page,params){
      if(params){
        $location.replace().path(page+'/'+params.slug+'/'+params._id);
      }else{
        $location.replace().path('/');
      }
    };


    // Function to generate breadcrumb for doctor and agency
    // Future: Put it inside a directive


  })

  .controller('AgencyCtrl', function ($scope, Auth,Patient, Agency, socket, $rootScope) {

    console.log("aaaaaa");


    $rootScope.isAdmin = Auth.isAdmin;
    $rootScope.isAgency = Auth.isAgency;
    $scope.bbb = Auth.getCurrentUser();


    $scope.createAgency = function(agency){
      var b =agency;
      b.in="agency";
      console.log(Auth.getCurrentUser()._id );
      console.log(agency.lastName);
      agency.patient_name=agency.lastName;
      agency._id=agency._id;
      agency.patient_id=agency._id;
      agency.patient_cin= agency.cin;
      agency.patient_from=agency.from;
      agency.patient_age=agency.age;
      agency.patient_gender= agency.gender;
      agency.parent_critical=agency.citical;
      agency.patient_to=agency.to;
      agency.association_id= agency.uid;
      agency.agency_id= Auth.getCurrentUser()._id ;
      agency.in="agency";
      console.log(agency.agency_id);
      Agency.save(agency).$promise;
      Patient.update({ id:b._id }, b).$promise
    }

    $scope.patienttoshow = function (azerty) {
      $scope.datetoshow=azerty;
    }


    $scope.agencys = {};
    $scope.agencys.items ={};
    $scope.agencys.items =Agency.query();




    $scope.currencyFormatting = function(value){
      return  '$ ' + value.toString();
    };

    $scope.removeAgency = function(agency){
      var index = $scope.fl.Agencys.indexOf(agency);
      if (index > -1) {
        $scope.fl.Agencys.splice(index, 1);
        $scope.filter();
      }
    }


    $scope.patients = {};
    $scope.aa = Auth.getCurrentUser();
    $scope.patients.items ={};
    $scope.patients.items =Patient.query();
    console.log(Patient.query());
    console.log("aaaaaa");
    $scope.fl = {};
    $scope.fl.Agencys = [];


  });

