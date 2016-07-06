'use strict';

angular
  .module('apsApp').factory('ContactUsService', ['$htpp', function($http){

    var getProducts = function() {
      return $http.get("data/products.json")
                .then(function(response) {
                  return response.data;
                })
    };

    return {
      getProducts: getProducts
    }

  }]);
