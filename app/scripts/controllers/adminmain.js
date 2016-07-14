'use strict';
/**
 * @ngdoc function
 * @name apsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the apsApp
 */
angular.module('apsApp')
  .controller('AdminHomeCtrl', ['$scope', function($scope, $position) {

    $scope.aceLoaded = function(_editor) {
      // Options
      _editor.setReadOnly(true);
    };

    $scope.aceChanged = function(e) {
      //
    };

  }]);
