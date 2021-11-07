'use strict';

angular.module('MeanApp')
  .controller('PatientDetails1Ctrl', function ($scope,$http, Auth, $rootScope, Patient, Hotel,User, socket, $stateParams, $location, $state, $injector) {
    var id = $stateParams.id;
    // var slug = $stateParams.slug;
    // Storing the patient id into localStorage because the _id of the selected patient which was passed as a hidden parameter from patients won't available on page refresh
    if (localStorage !== null && JSON !== null && id !== null) {
      localStorage.patientId = id;
    }
    var patientId = localStorage !== null ? localStorage.patientId : null;


    $scope.deleteH = function (b) { // success handler

      if (b.in == 'hotel') {
        console.log("rrrrrrrrrrr");
        var e = Auth.getCurrentUser()._id;
        var f = b._id;

        var request = {
          userId: e,
          patientId: f
        };

        $http.post('api/users/deletePatient/',request);
        b.in = "doctor";


        Patient.update({id: b._id,}, b).$promise;
      }
      else {
        var c = Auth.getCurrentUser()._id;
        var d = b._id;

        var request = {
          userId: c,
          patientId: d
        };

        console.log("adding");
        $http.post('api/users/hoteltakeCase', request)
          .then(function (response) {
            console.log("done");
          });
        b.in = "hotel";
        console.log(Auth.getCurrentUser()._id);
        var hotel = {};
        hotel.patient_name = b.firstName;
        hotel._id = b._id;
        var getDatetime = new Date();
        hotel.datetoken=getDatetime;
        hotel.patient_id = b._id;
        hotel.patient_cin = b.cin;
        hotel.patient_from = b.from;
        hotel.patient_age = b.age;
        hotel.patient_gender = b.gender;
        hotel.critical = b.citical;
        hotel.patient_to = b.to;
        hotel.association_id = b.uid;
        hotel.hotel_id = Auth.getCurrentUser()._id;
        hotel.in = "hotel";
        console.log(hotel.hotel_id);
        Hotel.save(hotel).$promise;
        Patient.update({id: b._id}, b).$promise
      }


    };





    $scope.patient = Patient.get({id: patientId}, function (data) {
      socket.syncUpdates('patient', $scope.data);
    });

    $scope.i = 0;
    $scope.changeIndex = function (i) {
      $scope.i = i;
    };

    // The main function to navigate to a page with some hidden parameters
    $scope.navigate = function (page, params) {
      if (params) {
        $location.replace().path(page + '/' + params.slug + '/' + params._id);
      } else {
        $location.replace().path('/');
      }
    };

    // Function to generate breadcrumb for doctor and hotel
    // Future: Put it inside a directive


  })

  .controller('HotelCtrl', function ($scope,$window, $http, $state, Auth, $stateParams, $location, Patient, Hotel, User, socket, $rootScope, $injector, $loading) {

    if ($stateParams.patientsku) {
      $scope.patient = $scope.store.getPatient($stateParams.patientsku);
    }


    $rootScope.isAdmin = Auth.isAdmin;
    $rootScope.isHotel = Auth.isHotel;

    $scope.bbb = Auth.getCurrentUser();


    $scope.lol=Auth.getCurrentUser().location;
    $scope.hoteltakeCase = function (userId, patientId) {

    };


    $scope.compteur=0;

    $scope.arrived = function (hotel) {
      var fresh = hotel;

      console.log(fresh.patient_age);
      var getDatetim = new Date();
      fresh.datehosted=getDatetim;
      fresh.hosted="1";


      Hotel.update({id: fresh._id}, fresh).$promise;
    }
    $scope.deletehotel = function (hotel) {
      Hotel.delete({id: hotel._id}).$promise;
    }



    $scope.finishedH = function (hotel) {
      var fresh = hotel;

      console.log(fresh.patient_age);
      var getDatetim = new Date();
      fresh.datefinished=getDatetim;
      fresh.finished="1";


      Hotel.update({id: fresh._id}, fresh).$promise;
    }








    $scope.changePassword = function(form) {
      $scope.lol=$window.loca;
      var c = Auth.getCurrentUser()._id;


      var request = {
        userId: c,
        location: $window.loca
      };

      $http.post('api/users/updateloction', request)
        .then(function (response) {
          $scope.message = 'Profile successfully changed.';
          $window.location.href = "/hotel";

        });

    };










    $scope.createHotel = function (hotel) {

      $scope.aa = Auth.getCurrentUser();
      console.log(Auth.getCurrentUser()._id);
      var b = hotel;

      var c = Auth.getCurrentUser()._id;
      var d = hotel._id;

      var request = {
        userId: c,
        patientId: d
      };

      console.log("adding");
      $http.post('api/users/hoteltakeCase', request)
        .then(function (response) {
          console.log("done");
        });

      console.log(hotel.critical);
      b.in = "hotel";
      b.hotel = Auth.getCurrentUser()._id;
      Patient.update({id: b._id}, b).$promise;
      console.log(Auth.getCurrentUser()._id);
      hotel.patient_name = hotel.firstName;
      hotel._id = hotel._id;
      hotel.patient_id = hotel._id;
      hotel.patient_cin = hotel.cin;
      var getDatetime = new Date();
      hotel.datetoken=getDatetime;
      hotel.patient_from = hotel.from;
      hotel.patient_age = hotel.age;
      hotel.patient_gender = hotel.gender;
      hotel.critical = hotel.critical;
      hotel.patient_to = hotel.to;
      hotel.association_id = hotel.uid;
      hotel.hotel_id = Auth.getCurrentUser()._id;
      hotel.in = "hotel";
      console.log(hotel.hotel_id);
      Hotel.save(hotel).$promise;

      for (var i=0;i<$scope.patients.items.length;i++){
        console.log(hotel._id);
        console.log($scope.patients.items[i]._id);
        if (hotel._id==$scope.patients.items[i]._id){
          $("#patient-confirmation"+$scope.patients.items[i]._id).modal("hide");
          $("#patient-confirmation"+$scope.patients.items[i]._id).remove();
          $("#patient-info"+$scope.patients.items[i]._id).modal("hide");
          $("#patient-info"+$scope.patients.items[i]._id).remove();
          $scope.patients.items.splice(i,1);
        }

      }


    }























    $scope.hotels = {};
    $scope.hotels.items = {};
    $scope.hotels.items = Hotel.query();


    $scope.currencyFormatting = function (value) {
      return '$ ' + value.toString();
    };

    $scope.removeHotel = function (hotel) {
      console.log("rrrrrrrrrrr");
      var e = Auth.getCurrentUser()._id;
      var f = hotel._id;

      var request = {
        userId: e,
        patientId: f
      };

      $http.post('api/users/deletePatient/',request);
      var index = $scope.fl.Hotels.indexOf(hotel);
      if (index > -1) {
        $scope.fl.Hotels.splice(index, 1);
        $scope.filter();
      }
    }


    $scope.patients = {};
    $scope.patients.items = {};
    Patient.query().$promise.then(function(v) {
    $scope.patients.items=[];
    for (var i=0;i<v.length;i++){
      if ((v[i].in=="doctor" || v[i].in=="agency") && v[i].to==Auth.getCurrentUser().location)
        $scope.patients.items.push(v[i]);
    }
    });

    $scope.fl = {};
    $scope.fl.Hotels = [];

    $scope.aa = Auth.getCurrentUser();


  });

