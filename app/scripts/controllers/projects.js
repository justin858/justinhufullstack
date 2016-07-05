'use strict';

/**
 * @ngdoc function
 * @name apsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the apsApp
 */
 angular
   .module('apsApp').controller('ProjectsCtrl', ['$scope', '$timeout', 'Portfolio', '$location', function ($scope, $timeout, Portfolio, $location) {

    $scope.projectlist = Portfolio.query();
    $scope.tests = [{
      "id": 15,
      "slug": "healthand",
      "title": "Health&",
      "description": "<p>A web application presents entertaining and educational health. </p>",
      "skills": [
          "ReactJS",
          "jQuery",
          "HTML & CSS",
          "Sass",
          "Grunt"
      ],
      "client": "Health&",
      "agency": "Health&",
      "image": "img/projects/healthand.jpg",
      "link": "http://healthand.com/"
  }];

  }]);
