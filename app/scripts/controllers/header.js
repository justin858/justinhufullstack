'use strict';

/**
 * @ngdoc function
 * @name apsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the apsApp
 */
 angular
   .module('apsApp').controller('HeaderCtrl', ['$scope','$location', function ($scope, $location) {
     $scope.isActive = function (viewLocation) {
         return viewLocation === $location.path();
     };
  }]);
