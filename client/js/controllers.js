movieRecApp.controller('MovieCtrl', function($rootScope, $scope, movieRecFactory) {
  $scope.data = [];


  movieRecFactory.getMovieRec().then(function(data) {
    $scope.data = data.data;
  });

  $scope.save = function($event) {
        movieRecFactory.saveMovieRec({
          "title": $scope.movie.title,
          "releaeDate": $scope.movie.date,
          "duration": $scope.movie.duration,
          "genre": $scope.movie.genre,
          "synopsis": $scope.movie.synopsis,
          "isRecommended": true
        }).then(function(data) {
          $scope.data.push(data.data);
        });
        $scope.movie.title = '';
        $scope.movie.date = '';
        $scope.movie.duration = '';
        $scope.movie.genre = '';
        $scope.movie.synopsis = '';
  }



});
