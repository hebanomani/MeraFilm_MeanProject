angular.module('meraFilm').controller('BookingController', function($http, $scope,$rootScope,$location) {

  var init1 = function(){

    //   $http.get('/api1/movie', $scope.movieData).then(function (response) {
    //       $scope.movieData=response.data;
    // //  console.log($scope.movieData);
    //       });
          $http.get('/api2/theatres',$scope.theatreData).then(function (response) {
            $scope.theatreData=response.data;
          });
          // $http.get('/api3/moviemapping',$scope.mapping).then(function (response) {
          //   $scope.theatreData=response;
          // });
      };
        init1();

 var init=function()
 {
   var b=sessionStorage.getItem('movieName');
//   console.log(b);
// //   $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+b+'trailer'+'&key=AIzaSyAP779ejfKseunwu7XpDaakUj_9qXkJpRE')
// // .then(response => {
// // var trailer_id=response.data.items[0].id.videoId;
// // console.log("trailer_id"+trailer_id);
// // var trailer="https://www.youtube.com/embed/"+trailer_id;
// // document.getElementById('player').setAttribute("src",trailer);
// // });
$http.get('/api1/getRating/'+b).then(function(response){
  //reponse=response.data;
  var d= response.data;
  //console.log(d.length);
$scope.ratecount=0;
     var count=0;
    var i;
   try
   {
for(i=0;i<=d.length;i++)
{
  count+=parseInt(d[i].Rating);
}
}
 catch(e){}
 if(count>0)
 {//console.log(count);
   $scope.ratecount=Math.round(count*100/(i*5));}
 // alert('rating : '+$scope.ratecount);
 document.getElementById("rate").innerHTML=$scope.ratecount;
});
};
  init();

  $scope.rate=function(r)
{
var m_name=sessionStorage.getItem('movieName');
  $http.post('/api1/rating/'+m_name+'/'+r).then(function(response){

  });
};
$scope.booking=[];
//  var bookingShow=function(){

    var booking=function(){

var data=sessionStorage.getItem('movieName');
  //var data=$rootScope.movieName;
  $http.get('/api3/selmoviename/'+data).then(function(response){
    $scope.booking=response.data;
  });
  $http.get('/api1/moviePoster/'+data).then(function(response){
   $rootScope.moviedata=response.data;
   sessionStorage.setItem('moviedata',$rootScope.moviedata);
   });

};
// bookingShow();
booking();
$scope.movDates=[];
var showDates=function() {
for(i=0;i<6;i++)
{
  var date=new Date();
  date.setDate(date.getDate()+i);
  $scope.movDates[i]=date;
  // $scope.movDates[i].toString();
}
};
showDates();

$scope.setShow=function(a,b,c,d)
{
  $rootScope.movieShow=a;
  sessionStorage.setItem('movieShow',$rootScope.movieShow);
  sessionStorage.setItem('movieTheatre',b);
  sessionStorage.setItem('movieDate',c);
  //console.log(c);
  sessionStorage.setItem('movieCity',d);
$location.path("/seats");
};
});
