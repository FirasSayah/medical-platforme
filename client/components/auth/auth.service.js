'use strict';

angular.module('MeanApp')
  .value('redirectToUrlAfterLogin', { url: ''})
  .factory('Auth', function Auth($location, $rootScope, $http, User, $cookieStore, $q, redirectToUrlAfterLogin) {
    var currentUser = {};
    if($cookieStore.get('token')) {
      currentUser = User.get();
    }
    var adminmail =  currentUser.role;

    return {

      /**
       * Authenticate user and save token
       *
       * @param  {Object}   user     - login info
       * @param  {Function} callback - optional
       * @return {Promise}
       */
      login: function(user, callback) {
        var cb = callback || angular.noop;
        var deferred = $q.defer();

        $http.post('/auth/local', {
          email: user.email,
          password: user.password
        }).then(success, error);
        function success(data) {
          console.log(user.password)
          console.log(user.email)
          //console.log(data);
          $cookieStore.put('token', data.data.token);
          currentUser = User.get();
          deferred.resolve(data);
          return cb();
        }
        function error(err) {
          this.logout();
          deferred.reject(err);
          return cb(err);
        }
        return deferred.promise;
      },

      /*$http.post('/auth/local', {
       email: user.email,
       password: user.password
       }).
       success(function(data) {
       //console.log(user.password)
       $cookieStore.put('token', data.token);
       currentUser = User.get();
       deferred.resolve(data);
       return cb();
       }).
       error(function(err) {
       this.logout();
       deferred.reject(err);
       return cb(err);
       }.bind(this));

       return deferred.promise;
       },
       */



      /**
       * Delete access token and user info
       *
       * @param  {Function}
       */
      logout: function() {
        $cookieStore.remove('token');
        currentUser = {};
      },
      saveAttemptUrl: function() {
        if($location.path().toLowerCase() !== '/login' || $location.path().toLowerCase() !== '/signup') {
          redirectToUrlAfterLogin.url = $location.path();
        }
        else {
          redirectToUrlAfterLogin.url = '/';
        }
      },
      redirectToAttemptedUrl: function(aaa) {

        $location.path(aaa);
      },
      /**
       * Create a new user
       *
       * @param  {Object}   user     - user info
       * @param  {Function} callback - optional
       * @return {Promise}
       */
      createUser: function(user, callback) {
        var cb = callback || angular.noop;

        return User.save(user,
          function(data) {
            $cookieStore.put('token', data.token);
            currentUser = User.get();
            return cb(user);

          },
          function(err) {
            this.logout();
            return cb(err);
          }.bind(this)).$promise;
      },

      /**
       * Change password
       *
       * @param  {String}   oldPassword
       * @param  {String}   newPassword
       * @param  {Function} callback    - optional
       * @return {Promise}
       */
      changePassword: function(oldPassword, newPassword,newName,neweMail,newphone,newaddress,newspeciality,newcapacity,newlocation,newdepartureDate,newdepartureDate2,newdepartureDate3, callback) {
        var cb = callback || angular.noop;

        console.log("aaa"+newdepartureDate);
        return User.changePassword({ id: currentUser._id }, {
          oldPassword: oldPassword,
          newName:newName,
          neweMail:neweMail,
          newdepartureDate:newdepartureDate,
          newdepartureDate2:newdepartureDate2,
          newdepartureDate3:newdepartureDate3,
          newphone:newphone,
          newaddress:newaddress,
          newspeciality:newspeciality,
          newcapacity:newcapacity,
          newlocation:newlocation,
          newPassword: newPassword
        }, function(user) {
          return cb(user);
        }, function(err) {
          return cb(err);
        }).$promise;
      },

      changePasswordHotel: function(oldPassword, newPassword,newName,neweMail,phone,location, callback) {
        var cb = callback || angular.noop;

        return User.changePasswordHotel({ id: currentUser._id }, {
          oldPassword: oldPassword,
          newName:newName,
          neweMail:neweMail,
          phone:phone,
          location:location,
          newPassword: newPassword
        }, function(user) {
          return cb(user);
        }, function(err) {
          return cb(err);
        }).$promise;
      },
      /**
       * Gets all available info on authenticated user
       *
       * @return {Object} user
       */
      getCurrentUser: function() {
        return currentUser;
      },

      /**
       * Check if a user is logged in
       *
       * @return {Boolean}
       */
      isLoggedIn: function() {
        return currentUser.hasOwnProperty('role');
      },

      /**
       * Waits for currentUser to resolve before checking if user is logged in
       */
      isLoggedInAsync: function(cb) {
        if(currentUser.hasOwnProperty('$promise')) {
          currentUser.$promise.then(function() {
            cb(true);
          }).catch(function() {
            cb(false);
          });
        } else if(currentUser.hasOwnProperty('role')) {
          cb(true);
        } else {
          cb(false);
        }
      },

      /**
       * Check if a user is an admin
       *
       * @return {Boolean}
       */
      isAdmin: function() {
        return currentUser.role === 'admin';
      },
      isAssociation: function() {
        return currentUser.role === 'association';
      },
      isDoctor: function() {
        return currentUser.role === 'doctor';
      },
      isTravel: function() {
        return currentUser.role === 'travel';
      },
      isHotel: function() {
        return currentUser.role === 'hotel';
      },
      isAgency: function() {
        return currentUser.role === 'agency';
      },
      /**
       * Get auth token
       */
      getToken: function() {
        return $cookieStore.get('token');
      }
    };
  });
