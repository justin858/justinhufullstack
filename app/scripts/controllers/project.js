'use strict';

/**
 * @ngdoc function
 * @name apsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the apsApp
 */
 angular
   .module('apsApp').controller('ProjectCtrl', ['$scope', '$routeParams', 'Portfolio',
    function ($scope, $routeParams, Portfolio) {

        $scope.prevProject = null;
        $scope.nextProject = null;

        $scope.singleproject = Portfolio.get({projectId: $routeParams.projectId});

        $scope.projectlist = Portfolio.query();

        $scope.showPrev = function (project) {
          $scope.currentIndex = $scope.getArrayIndexForKey($scope.projects, "slug", $routeParams.projectId);
          if ($scope.currentIndex > 0) {
            $scope.prevProject = $scope.projects[$scope.currentIndex - 1];
          }
          else {
            $scope.prevProject = $scope.projects[$scope.projects.length - 1];
          }
        }
        $scope.showNext = function (project){
		  		$scope.currentIndex = $scope.getArrayIndexForKey($scope.projects, "slug", $routeParams.projectId);
	  			if ($scope.currentIndex < ($scope.projects.length - 1)){
	  				console.log($scope.project);
	  				$scope.nextProject = $scope.projects[$scope.currentIndex + 1];
	  			}
	  			else {
	  				$scope.nextProject = $scope.projects[0];
	  			}
	  		}
        $scope.getArrayIndexForKey = function(arr, key, val) {
          for (var i = 0; i < arr.length; i++) {
            if(arr[i][key] == val)
              return i;
          }
          return -1;
        }

  }]);
