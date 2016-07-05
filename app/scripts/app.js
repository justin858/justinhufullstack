'use strict';

/**
 * @ngdoc overview
 * @name apsApp
 * @description
 * # apsApp
 *
 * Main module of the application.
 */
angular
  .module('apsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/playground', {
        templateUrl: 'views/playground.html',
        controller: 'PlaygroundCtrl',
        controllerAs: 'playground'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'adminCtrl',
        controllerAs: 'playground'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
