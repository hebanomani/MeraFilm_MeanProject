angular.module('meraFilm').controller('ConfirmController', function($scope, $http,$rootScope,$location) {

  var init=function(){

var x = document.getElementById("cid");
      $scope.movieName=sessionStorage.getItem('movieName');
      var m=sessionStorage.getItem('movieName');
      $scope.movieCity=sessionStorage.getItem('movieCity');
      $scope.movieTheatre=sessionStorage.getItem('movieTheatre');
      $scope.movieShow=sessionStorage.getItem('movieShow');
      $scope.cess=sessionStorage.getItem('cess');
      $scope.res=sessionStorage.getItem('res');
      $scope.customerName=sessionStorage.getItem('customerName');
      $scope.movieDate=sessionStorage.getItem('movieDate');
      $scope.movieAmount=sessionStorage.getItem('movieAmount');
      $scope.movieSeats1=sessionStorage.getItem('movieSeats1');
      $scope.movieSeatsNo=sessionStorage.getItem('movieSeatsNo');

   x.innerHTML=Math.floor((Math.random() * 1000000000) + 1);
  };
  init();

  // $scope.feedback=function()
  // {
  //   var n=document.getElementById("namee").value;
  //   var s=document.getElementById("subject").value;
  //   var e=document.getElementById("emailid").value;
  //   var c=document.getElementById("feedback").value;
  //   $http.post('/conapi/newFeedback/'+n+'/'+s+'/'+e+'/'+c).success(function (response) {
  //   });
  //   alert('Thank you for the feedback .');
  //   document.getElementById("namee").innerHTML="";
  //   document.getElementById("emailid").innerHTML="";
  //   document.getElementById("subject").innerHTML="";
  //   document.getElementById("feedback").innerHTML="";
  // };
});
