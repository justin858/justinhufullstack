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

    //  when submitting the add form, send the text to the node API
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

    $scope.kkk = [
      {
          "Pid": 19,
          "slug": "jhportfolio",
          "title": "Justin HU portfolio",
          "description": "<p>My own portfolio website which demonstrate my skills as a node.js fullstack developer.</p>",
          "skills": [
            "Node.js",
            "Grunt",
            "Bower",
            "AngularJS 1.x",
            "ReactJS",
            "MongoDB",
            "Heroko",
            "Git",
          	"Bootstrap",
            "HTML & CSS"
          ],
          "client": "Endeavour Marketing",
          "agency": "Endeavour Foundation IT",
          "image": "images/projects/p_endeavour_lotteries.png",
          "Exlink": "https://www.endeavour.com.au/"
      },
      {
          "Pid": 18,
          "slug": "eflagship",
          "title": "Endeavour Flagship",
          "description": "<p>A Endeavour Foundation Flagship website</p>",
          "skills": [
            "Sitecore CMS",
            "ASP.NET",
            "IIS",
              "HTML & CSS",
              "jQuery",
              "jQuery UI",
          	"Bootstrap"
          ],
          "client": "Endeavour Marketing",
          "agency": "Endeavour Foundation IT",
          "image": "images/projects/p_endeavour_lotteries.png",
          "Exlink": "https://www.endeavour.com.au/"
      }];


    //  $scope.sendToDatabase = function(kkk) {
    //      $http.post('http://localhost:8090/api/projects', kkk)
    //          .success(function(kkk) {
    //             //  $scope.formData = {}; // clear the form so our user is ready to enter another
    //             //  $scope.todos = data;
    //              console.log(kkk);
    //          })
    //          .error(function(kkk) {
    //              console.log('Error: ' + kkk);
    //          });
    //  };


     $scope.reset();
  }]);
