movieRecApp.controller('MovieCtrl', function($rootScope, $scope, movieRecFactory) {
  $scope.movieRecs = [];
  $scope.isEditable = [];


  movieRecFactory.getMovieRec().then(function(data) {
    $scope.movieRecs = data.data;
  });

  $scope.save = function($event) {
      movieRecFactory.saveMovieRec({
        "title": $scope.movie.title,
        "releaeDate": $scope.movie.date,
        "duration": $scope.movie.duration,
        "genre": $scope.movie.genre,
        "synopsis": $scope.movie.synopsis
      }).then(function(data) {
        $scope.movieRecs.push(data.data);
      });
      $scope.movie.title = '';
      $scope.movie.date = '';
      $scope.movie.duration = '';
      $scope.movie.genre = '';
      $scope.movie.synopsis = '';
    };
});
