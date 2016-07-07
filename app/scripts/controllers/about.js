'use strict';

/**
 * @ngdoc function
 * @name apsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the apsApp
 */
 angular
   .module('apsApp').controller('AboutCtrl', ['$scope', '$http', function ($scope, $http) {
     $scope.master = {};

     $scope.update = function(user) {
       $scope.master = angular.copy(user);
     };

     $scope.reset = function() {
       $scope.user = angular.copy($scope.master);
     };

     // when submitting the add form, send the text to the node API
     $scope.sendToDatabase = function(user) {
         $http.post('http://localhost:8090/api/email', user)
             .success(function(user) {
                //  $scope.formData = {}; // clear the form so our user is ready to enter another
                //  $scope.todos = data;
                 console.log(user);
             })
             .error(function(user) {
                 console.log('Error: ' + user);
             });
     };

     $scope.reset();
  }]);
