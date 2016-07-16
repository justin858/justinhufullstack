'use strict';

/**
 * @ngdoc function
 * @name apsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the apsApp
 */
 angular
   .module('apsApp').controller('DashboardMainCtrl', ['$rootScope', '$scope', '$location', '$localStorage', '$state', 'Main', function($rootScope, $scope, $location, $localStorage, $state, Main) {

          $scope.signin = function() {
              var formData = {
                  username: $scope.username,
                  password: $scope.password
              }

              Main.signin(formData, function(res) {
                  if (res.type == false) {
                      alert(res.data)
                  } else {
                      $localStorage.token = res.data.token;
                      $state.go('dashboard.admin');
                  }
              }, function() {
                  $rootScope.error = 'Failed to signin';
              })
          };

          $scope.signup = function() {
              var formData = {
                  username: $scope.username,
                  password: $scope.password
              }

              Main.save(formData, function(res) {
                  if (res.type == false) {
                      alert(res.data)
                  } else {
                      $localStorage.token = res.data.token;
                      $state.go('dashboard.admin');
                  }
              }, function() {
                  $rootScope.error = 'Failed to signup';
              })
          };

          $scope.me = function() {
              Main.me(function(res) {
                  $scope.myDetails = res;
              }, function() {
                  $rootScope.error = 'Failed to fetch details';
              })
          };

          $scope.logout = function() {
              Main.logout(function() {
                  console.log('logout');
                  window.location = "/#/login"
              }, function() {
                  alert("Failed to logout!");
              });

              $state.go('login');
          };
          $scope.token = $localStorage.token;
      }])
