angular.module('meraFilm').controller('PaymentController', function($http, $scope,$rootScope,$location) {
  var init=function()
  {
    $scope.movieName=sessionStorage.getItem('movieName');
    $scope.movieTheatre=sessionStorage.getItem('movieTheatre');
    $scope.movieSeats=sessionStorage.getItem('movieSeats');
    $scope.movieDate=sessionStorage.getItem('movieDate');
    $scope.movieShow=sessionStorage.getItem('movieShow');
    $scope.movieAmount=sessionStorage.getItem('movieAmount');
  };
  init();
$scope.confirm=function()
{
  $rootScope.customerName= document.getElementById("name").value;
  $rootScope.movieEmail= document.getElementById("emailid").value;
  $rootScope.moviePhone= document.getElementById("phoneno").value;
  $rootScope.cess=$rootScope.movieAmount*0.15;
  $rootScope.res=parseInt($rootScope.cess)+parseInt($rootScope.movieAmount);

  sessionStorage.setItem('movieEmail',$rootScope.movieEmail);
  sessionStorage.setItem('moviePhone',$rootScope.moviePhone);
  sessionStorage.setItem('customerName',$rootScope.customerName);
  sessionStorage.setItem('cess',$rootScope.cess);
  sessionStorage.setItem('res',$rootScope.res);

$scope.movieSeats1=sessionStorage.getItem('movieSeats1');

var m=sessionStorage.getItem('movieName');
  //var m=$rootScope.movieName;
  var c=sessionStorage.getItem('movieCity');
  var t=sessionStorage.getItem('movieTheatre');
var s=$rootScope.movieShow;
  //var s=sessionStorage.getItem('movieShow');
  var se=sessionStorage.getItem('movieSeats');
  var sn=sessionStorage.getItem('movieSeatsNo');
  var am=$rootScope.res;//sessionStorage.getItem('res');
  var n=document.getElementById("name").value;
  var e=document.getElementById("emailid").value;
  var p=document.getElementById("phoneno").value;
  var d=sessionStorage.getItem('movieDate');
  sessionStorage.setItem('currentDate',new Date());
  $rootScope.currentDate=new Date();
  var cd=$rootScope.currentDate;
$http.post('/conapi/newTicket/'+m+'/'+c+'/'+t+'/'+s+'/'+se+'/'+sn+'/'+am+'/'+n+'/'+e+'/'+p+'/'+d+'/'+cd).then(function (response){});
$location.path("/confirm");
};
});
