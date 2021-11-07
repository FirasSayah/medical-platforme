'use strict';

angular.module('MeanApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
        id: '@_id'
      },
      {
        changePassword: {
          method: 'PUT',
          params: {
            controller:'password'
          }
        }, changePasswordHotel: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      }, changeName: {
        method: 'PUT',
        params: {
          controller:'name'
        }
      },
        get: {
          method: 'GET',
          params: {
            id:'me'
          }
        }
      });
  });

