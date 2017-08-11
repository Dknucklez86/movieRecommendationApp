// Exposes api to client
movieRecApp.factory('movieRecFactory', function($http) {
  var urlBase = '/api/movierecs';
  var _movieRecService = {};

  _movieRecService.getMovieRec = function() {
    return $http.get(urlBase);
  };

  _movieRecService.saveMovieRec = function(movie) {
    return $http.post(urlBase, movie);
  };


  return _movieRecService;
});
