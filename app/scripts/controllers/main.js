'use strict';

/**
 * @ngdoc function
 * @name apsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the apsApp
 */
 angular
   .module('apsApp').controller('MainCtrl', ['$scope', function ($scope) {

     $scope.frontEndData = [10,20,30,40,60, 80, 20, 50];
     $scope.backEndData = [ 80, 20, 50, 10,20,30,40,60];
     $scope.databaseData = [40,60, 80, 10,20,30,20, 50];

     $scope.barchartJsonData = [
       {
         "skill": "grunt",
         "level": 7
       },
       {
         "skill": "bower",
         "level": 7
       },
       {
         "skill": "AngularJS 1.x",
         "level": 8
       }
     ];

    $scope.pieChartData = [ {name: "one", value: 10},
                   {name: "two", value: 3},
                 {name: "three", value: 6}];

  }]);
