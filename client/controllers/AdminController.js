angular.module('meraFilm').controller('AdminController', function($http, $scope,$location) {
  $scope.logingout = function(){
    $http.get('/api/logout').then(function(response){
  //    $scope.booking=response.data;
    console.log('Logout Controller');
      $location.path("/");
    });
  };
});
