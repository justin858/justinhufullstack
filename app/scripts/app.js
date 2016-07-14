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
    'ngTouch',
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    // 'ui.ace',
    'xeditable'
  ]).config(['$routeProvider','$stateProvider','$urlRouterProvider','$ocLazyLoadProvider', function ($routeProvider,$stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'views/main.html',
    //     controller: 'MainCtrl',
    //     controllerAs: 'main'
    //   })
    //   .when('/about', {
    //     templateUrl: 'views/about.html',
    //     controller: 'AboutCtrl',
    //     controllerAs: 'about'
    //   })
    //   .when('/projects', {
    //     templateUrl: 'views/projects.html',
    //     controller: 'ProjectsCtrl',
    //     controllerAs: 'projects'
    //   })
    //   .when('/projects/:projectId', {
    //     templateUrl: 'views/project.html',
    //     controller: 'ProjectCtrl',
    //     controllerAs: 'project'
    //   })
    //   .when('/playground', {
    //     templateUrl: 'views/playground.html',
    //     controller: 'PlaygroundCtrl',
    //     controllerAs: 'playground'
    //   })
    //   .when('/admin', {
    //     templateUrl: 'views/admin.html',
    //     controller: 'adminCtrl',
    //     controllerAs: 'admin'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });

      $ocLazyLoadProvider.config({
        debug:false,
        events:true,
      });

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .state('projects', {
          url: '/projects',
          templateUrl: 'views/projects.html',
          controller: 'ProjectsCtrl',
          controllerAs: 'projects'
        })
        .state('project', {
          url: '/projects/:projectId',
          templateUrl: 'views/project.html',
          controller: 'ProjectCtrl',
          controllerAs: 'project'
        })
        .state('playground', {
          url: '/playground',
          templateUrl: 'views/playground.html',
          controller: 'PlaygroundCtrl',
          controllerAs: 'playground'
        })
        .state('dashboard', {
          url:'/dashboard',
          templateUrl: 'views/dashboard/main.html',
          resolve: {
              loadMyDirectives:function($ocLazyLoad){
                  return $ocLazyLoad.load(
                  {
                      name:'apsApp',
                      files:[
                      'scripts/directives/header/header.js',
                      'scripts/directives/header/header-notification/header-notification.js',
                      'scripts/directives/sidebar/sidebar.js',
                      'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                      ]
                  }),
                  $ocLazyLoad.load(
                  {
                     name:'toggle-switch',
                     files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                            "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                        ]
                  }),
                  $ocLazyLoad.load(
                  {
                    name:'ngAnimate',
                    files:['bower_components/angular-animate/angular-animate.js']
                  }),
                  $ocLazyLoad.load(
                  {
                    name:'ngCookies',
                    files:['bower_components/angular-cookies/angular-cookies.js']
                  }),
                  $ocLazyLoad.load(
                  {
                    name:'ngResource',
                    files:['bower_components/angular-resource/angular-resource.js']
                  }),
                  $ocLazyLoad.load(
                  {
                    name:'ngSanitize',
                    files:['bower_components/angular-sanitize/angular-sanitize.js']
                  }),
                  $ocLazyLoad.load(
                  {
                    name:'ngTouch',
                    files:['bower_components/angular-touch/angular-touch.js']
                  });
              }
          }
      })
        .state('dashboard.admin',{
          url:'/admin',
          controller: 'AdminHomeCtrl',
          templateUrl:'views/dashboard/home.html',
          resolve: {
            loadMyFiles:function($ocLazyLoad) {
              return $ocLazyLoad.load({
                name:'apsApp',
                files:[
                'scripts/controllers/main.js',
                'scripts/directives/timeline/timeline.js',
                'scripts/directives/notifications/notifications.js',
                'scripts/directives/chat/chat.js',
                'scripts/directives/dashboard/stats/stats.js'
                ]
              });
            }
          }
        })
        .state('dashboard.projects', {
          templateUrl:'views/dashboard/projects.html',
          url:'/projects',
          controller: 'AdminProjectsCtrl'
        })
        .state('dashboard.skills', {
          templateUrl:'views/dashboard/skills.html',
          url:'/skills'
        })
        .state('dashboard.contacts', {
          templateUrl:'views/dashboard/contacts.html',
          url:'/contacts'
        })
        .state('dashboard.form',{
          templateUrl:'views/form.html',
          url:'/form'
      })
        .state('dashboard.blank',{
          templateUrl:'views/pages/blank.html',
          url:'/blank'
      })
        .state('login',{
          templateUrl:'views/pages/login.html',
          url:'/login'
      })
        .state('dashboard.chart',{
          templateUrl:'views/chart.html',
          url:'/chart',
          controller:'ChartCtrl',
          resolve: {
            loadMyFile:function($ocLazyLoad) {
              return $ocLazyLoad.load({
                name:'chart.js',
                files:[
                  'bower_components/angular-chart.js/dist/angular-chart.min.js',
                  'bower_components/angular-chart.js/dist/angular-chart.css'
                ]
              }),
              $ocLazyLoad.load({
                  name:'apsApp',
                  files:['scripts/controllers/chartContoller.js']
              });
            }
          }
      })
        .state('dashboard.table',{
          templateUrl:'views/table.html',
          url:'/table'
      })
        .state('dashboard.panels-wells',{
            templateUrl:'views/ui-elements/panels-wells.html',
            url:'/panels-wells'
        })
        .state('dashboard.buttons',{
          templateUrl:'views/ui-elements/buttons.html',
          url:'/buttons'
      })
        .state('dashboard.notifications',{
          templateUrl:'views/ui-elements/notifications.html',
          url:'/notifications'
      })
        .state('dashboard.typography',{
         templateUrl:'views/ui-elements/typography.html',
         url:'/typography'
     })
        .state('dashboard.icons',{
         templateUrl:'views/ui-elements/icons.html',
         url:'/icons'
     })
        .state('dashboard.grid',{
         templateUrl:'views/ui-elements/grid.html',
         url:'/grid'
     });



  }]);
