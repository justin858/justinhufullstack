'use strict';

angular
  .module('apsApp').factory('SkillsService', ['$resource', function($resource){
    return $resource('http://localhost:8090/api/skills', {
    }, {
			query: {method:'GET', isArray:true}
    }
    );
  }]);
