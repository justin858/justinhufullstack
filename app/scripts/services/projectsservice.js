'use strict';

angular
  .module('apsApp').factory('Portfolio', ['$resource', function($resource){
    return $resource('/data/:projectId.json', {}, {
			query: {method:'GET', params:{projectId:'projects'}, isArray:true}
    }
    );
  }]);
