'use strict';

/**
 * @ngdoc function
 * @name apsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the apsApp
 */
 angular
   .module('apsApp').controller('ProjectsCtrl', ['$scope', '$timeout', 'Portfolio', '$location', '$anchorScroll', function ($scope, $timeout, Portfolio, $location, $anchroScroll) {

     			// not show project detail as default
     			$scope._Index = -1;

     			$scope._showProject = true;

     			// get projects from service
     			$scope.projectlist = Portfolio.query();

     			$scope.toggleProject = function (){
     				return $scope._showProject;
     			}

     			// detect if current project slide is active
     			$scope.isActive = function (project){
     				var index = $scope.projectlist.indexOf(project);
     			    return $scope._Index === index;
     			};

     			// show previous project
     			$scope.showPrev = function (index){
     				$scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.projectlist.length - 1;
     			};

     			// show next project
     			$scope.showNext = function (index){
     				$scope._Index = ($scope._Index < $scope.projectlist.length - 1) ? ++$scope._Index : 0;
     			};

     			// show project on click and scroll to top
     			$scope.scrollTo = function (id, event, index){
     				// $location.hash(id);
     			    // call $anchorScroll()
     			    // var scrolled = $(window).scrollTop();

     			    // if (scrolled > 0){
     			    // 	$( "html, body" ).animate({
     					  //   scrollTop: 0,
     					  // }, 500, "easeInQuart", function(){
     					  // 	console.log('test');
     					  // });

     			    // 	$timeout(function() {
     				   //  	$scope.showProject(index);
     				   //  }, 1000);
     			    // }
     			    // else {
     			    	$scope._Index = index;
     				$scope._showProject = true;
     			    // }
     			    // event.preventDefault();
     			};

     			// Show project
     			$scope.showProject = function(index){
     			  	$scope._Index = index;
     				$scope._showProject = true;
     				// console.log($scope._Index + " " + $scope._showProject);
     			}

     			$scope.closeProject = function (){
     				$scope._showProject = false;
     			}
  }]);
