movieRecApp.controller('MovieCtrl', function($rootScope, $scope, $movieRecFactory) {
  $scope.movieRecs = "";
  $scope.isEditable = "";


  movieRecFactory.getMovieRec().then(function(data) {
    $scope.movieRecs = data.data;
  });

  $scope.save = function($event) {
      movieRecFactory.saveMovieRec({
        "title": $scope.titleInput,
        "releaeDate": $scope.releaseInput
      }).then(function(data) {
        $scope.movieRecs.push(data.data);
      });
      $scope.titleInput = '';
      $scope.releaseInput = '';

  }
});
