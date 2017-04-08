angular.module('meraFilm').controller('AddMoviesController', function($http, $scope) {

  $scope.movieData="";

var init = function(){
    $http.get('/api1/movie').then(function (response) {
      $scope.movieData = response.data;
    });
  };
  init();

  $scope.deleteMovie = function(movie){
    var x=confirm("Once deleted will not be recovered ?");
    if(x){
      $http.delete('/api1/deleteMovie/'+movie._id).then(function (response) {
    });
      window.location.reload();
  }
   init();
  };

  $scope.searchMovie = function(){
    $http.get('http://www.omdbapi.com/?t='+$scope.name).then(function (response) {
      $scope.movieData=response.data;
});
  };

  $scope.setMovie=function(m)
{
  //$rootScope.movieName=m;
  sessionStorage.setItem('movieName',m);
$location.path("/booking");
};

  $scope.addMovie = function(){
    $http.post('/api1/newMovie', $scope.movieData).then(function (response) {
    });
      window.location.reload();
   init();
  $scope.movieData='';
  };

});
