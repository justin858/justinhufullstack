'use strict';

angular
  .module('apsApp').factory('Portfolio', ['$resource', function($resource){
    return $resource('http://localhost:8090/api/projects/:projectId', {
       projectId: '@slug'
    }, {
			query: {method:'GET', isArray:true}
    }
    );
  }]);
