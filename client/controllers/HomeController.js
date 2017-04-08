angular.module('meraFilm').controller('HomeController', function($http, $scope,$location) {
  var init = function(){
      $http.get('/api1/movie').then(function (response) {
        $scope.movieData = response.data;
      });
    };
    init();

    $scope.setMovie=function(m)
    {
      //$rootScope.movieName=m;
    sessionStorage.setItem('movieName',m);
    ///console.log(m);
    $location.path("/Booking");
    };
});
