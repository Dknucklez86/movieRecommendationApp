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

  _movieRecService.updateMovieRec = function(movie) {
    return $http.put(urlBase, movie);
  };

  _movieRecService.deleteMovieRec = function(id) {
    return $http.delete(urlBase + '/' + id);
  };

  return _movieRecService;
});
