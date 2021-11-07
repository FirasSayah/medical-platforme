
'use strict';

angular.module('MeanApp')
// Sample factory (dummy)
  .factory('factory', [function () {
    var somValue = 42;
    return {
      someMethod: function () {
        return somValue;
      }
    };
  }])
  .factory('Clinic', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/clinics/:id', null, {'update': { method:'PUT' } });
    obj.count = $resource('/api/clinics/count', null, {'update': { method:'PUT' }});
    return obj;
  }])
  .factory('Category', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/doctor/:id', null, {'update': { method:'PUT' }});
    obj.parent = $resource('/api/doctor/parent/:id', null, {'update': { method:'PUT' }});
    obj.all = $resource('/api/patient/all', null, {'update': { method:'PUT' }});
    return obj;
  }])

  .factory('SortOptions', [function() {
    var obj = {};
    obj.server= [
       {name:'Name (A-Z)', val:{'name':1}},
       {name:'Name (Z-A)', val:{'name':-1}}
    ];
    obj.client= [
       {name:'Name Asc', val:'name'},
       {name:'Name Desc', val:'-name'}
    ];
    return obj;
  }])

  .factory('Doctor', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/doctor/:id', null, {'update': { method:'PUT' }});
    obj.parent = $resource('/api/doctor/parent/:id', null, {'update': { method:'PUT' }});
    obj.all = $resource('/api/doctor/all', null, {'update': { method:'PUT' }});
    return obj;
  }])
  .factory('Hotel', ['$resource', function($resource) {
    return $resource('/api/users/:id', null, {'update': { method:'PUT' } });
  }])
  .factory('Hotel', ['$resource', function($resource) {
    return $resource('/api/hotels/:id', null, {'update': { method:'PUT' } });
  }])
  .factory('Agency', ['$resource', function($resource) {
    return $resource('/api/users/:id', null, {'update': { method:'PUT' } });
  }])
  .factory('Agency', ['$resource', function($resource) {
    return $resource('/api/agencys/:id', null, {'update': { method:'PUT' } });
  }])
  .factory('User', ['$resource', function($resource) {
    return $resource('/api/users/:id', null, {'update': { method:'PUT' } });
  }])
  .factory('Patient', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/patients/:id', null, {'update': { method:'PUT' } });
    obj.my = $resource('/api/patients/my', null, {'update': { method:'PUT' }});
    return obj;
  }])
.factory('TrackPatient', ['$resource', function($resource) {
  var obj = {};
  obj = $resource('/api/patients/:id', null, {'update': { method:'PUT' } });
  obj.my = $resource('/api/patients/my', null, {'update': { method:'PUT' }});
  return obj;
}]);
