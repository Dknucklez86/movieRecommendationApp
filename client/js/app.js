movieRecApp = angular.module('movieRecApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/movie.html',
        controller: 'MovieCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });
