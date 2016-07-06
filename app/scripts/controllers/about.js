'use strict';

/**
 * @ngdoc function
 * @name apsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the apsApp
 */
 angular
   .module('apsApp').controller('AboutCtrl', ['$scope', function ($scope) {
     $scope.master = {};

     $scope.update = function(user) {
       $scope.master = angular.copy(user);
     };

     $scope.reset = function() {
       $scope.user = angular.copy($scope.master);
     };

     $scope.reset();
  }]);
