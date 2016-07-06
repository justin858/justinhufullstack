'use strict';

/**
 * @ngdoc function
 * @name apsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the apsApp
 */
 angular
   .module('apsApp').controller('PlaygroundCtrl', ['$scope','$http', function ($scope, $http) {
     $scope.formData = {};

         // when landing on the page, get all todos and show them
         $http.get('http://localhost:8090/api/todos')
             .success(function(data) {
                 $scope.todos = data;
                 console.log(data);
             })
             .error(function(data) {
                 console.log('Error: ' + data);
             });

         // when submitting the add form, send the text to the node API
         $scope.createTodo = function() {
             $http.post('http://localhost:8090/api/todos', $scope.formData)
                 .success(function(data) {
                     $scope.formData = {}; // clear the form so our user is ready to enter another
                     $scope.todos = data;
                     console.log(data);
                 })
                 .error(function(data) {
                     console.log('Error: ' + data);
                 });
         };

         // delete a todo after checking it
         $scope.deleteTodo = function(id) {
             $http.delete('http://localhost:8090/api/todos/' + id)
                 .success(function(data) {
                     $scope.todos = data;
                     console.log(data);
                 })
                 .error(function(data) {
                     console.log('Error: ' + data);
                 });
         };
  }]);
