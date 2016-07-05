'use strict';

angular
  .module('apsApp').factory('ProductService', ['$htpp', function($http){

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
