'use strict';

angular
  .module('apsApp').filter('skillfilter', function(){
  return function(projects, search){
    if (!search) {
      return projects;
    }
    return projects.filter(function(element, index, array) {
      for(var i = 0; i < element.skills.length; i++){
        if (element.skills[i] === search){
          return true;
        }
      }
    });
  }
});
