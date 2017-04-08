angular.module('meraFilm').controller('AddTheatreController', function($http, $scope) {

$scope.theatreData="";
  var init = function(){
    $http.get('/api2/theatres').then(function (response) {
      $scope.theatreData=response.data;
    });
  };
  init();

  $scope.insertTheatre = function(){
    $http.post('/api2/newTheatre', $scope.theatre).then(function (response) {
    });
    window.location.reload();
    init();
    $scope.theatreData='';
  };

  $scope.deleteTheatre = function(theatre){
    var x=confirm("Are you sure you want to delete ?");
    if(x){
      $http.delete('/api2/deleteTheatre/'+theatre._id).then(function (response) {
    });
  }
  window.location.reload();
    init();
  };


});
