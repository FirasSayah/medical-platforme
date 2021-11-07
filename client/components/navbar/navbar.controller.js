'use strict';

angular.module('MeanApp')
  .controller('NavbarCtrl', ['$scope', '$rootScope', '$location', 'Auth', '$modal', 'Doctor', 'Patient', 'SortOptions', '$q', 'Clinic', '$state','User', function ($scope, $rootScope, $location, Auth, $modal, Doctor, Patient,SortOptions,$q, Clinic, $state,User) {
    $scope.hideSubMenu = function(){
      // $('.megamenu .dropdown:hover .dropdown-menu').hide(); // Hide the navbar submenu once a doctor is selected
    }

    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $rootScope.Patients = Patient.query({active:true});
    $rootScope.Users = User.query({active:true});
    $rootScope.sortOptions = SortOptions.server;

    $scope.isCollapsed = true;
    $scope.isCollapsed1 = true;
    $rootScope.isLoggedIn = Auth.isLoggedIn;
    $rootScope.isAdmin = Auth.isAdmin;
    $rootScope.isAssociation = Auth.isAssociation;
    $rootScope.isDoctor = Auth.isDoctor;
    $rootScope.isTravel = Auth.isTravel;
    $scope.getCurrentUser = Auth.getCurrentUser;
    $rootScope.isHotel = Auth.isHotel;
    $rootScope.isAgency = Auth.isAgency;





    $scope.logout = function() {
      Auth.logout();
      $location.path('/dashboard');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.onSelectClinic = function($item){
        $state.go('clinicDetail', {id:$item._id, slug:$item.slug}, {reload: false});
        $scope.search = '';
    };
    $scope.onSelectPatient = function($item){
      $state.go('association', {id:$item._id, slug:$item.slug}, {reload: false});
      $scope.search = '';
    };
    $scope.onSelectUser = function($item){
      $state.go('user', {id:$item._id, slug:$item.slug}, {reload: false});
      $scope.search = '';
    };
    $scope.doctors = Doctor.all.query();

// // Script which calls all doctor from parent 0 and constructs the doctor hierarchy
// // This was moved to the server and now 1 call does it all instead 1 for each parent doctor + 1 for parent doctor itself
// var p = [];
// Travel_Agenciesry.parent.query({id:0},function(parents){
//     angular.forEach(parents,function(a){
//         a.children = [];
//         Travel_Agenciesry.parent.query({id:a.doctor},function(children){
//           a.children = children;
//         });
//         p.push(a);
//     });
//         $scope.doctors = p;
//         // console.log(p);
// });

    $scope.globalSearch = function(input){
          input = input.toLowerCase();
            var defer = $q.defer();
            if (input){
              Clinic.query({where:{nameLower: {'$regex': input}}, limit:10, select: {id: 1, name:1, slug: 1}},
                    function(data){
                          console.log(data);
                        if (!$scope.$$phase){ //check if digest is not in progress
                            $rootScope.$apply(function(){
                                defer.resolve(data);
                            });
                        } else {
                            defer.resolve(data);
                        }
                    },
                    function(response){
                        if (!$scope.$$phase){
                            $rootScope.$apply(function(){
                                defer.reject('Server rejected with status ' + response.status);
                            });
                        } else {
                            defer.reject('Server rejected with status ' + response.status);
                        }
                    });
            } else {
                if (!$scope.$$phase){
                    $rootScope.$apply(function(){
                        defer.reject('No search query ');
                        // $log.info('No search query provided');
                    });
                } else {
                    defer.reject('No search query ');
                    // $log.info('No search query provided');
                }
            }
            return defer.promise;
        };


  }]);
