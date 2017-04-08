angular.module('meraFilm').controller('SeatController', function($http, $scope,$rootScope,$location) {

$rootScope.movieAmount=0;

var init=function()
{
  var m=sessionStorage.getItem('movieName');
  $scope.movieName=m;
  var t=sessionStorage.getItem('movieTheatre');
  $scope.movieTheatre=t;
  var s=sessionStorage.getItem('movieShow');
  $scope.movieShow=s;
  var d=sessionStorage.getItem('movieDate');
  $scope.movieDate=d;
  $http.get('/conapi/bookedseats/'+m+'/'+t+'/'+s+'/'+d,$scope.Booking).then(function (response) {
    var x = response.data;
    //console.log('In booked Seat - controller' +response.length);
    for(i=0;i<x.length;i++)
    {
      for(j=0;j<x[i].SeatNo.length;j++)
      {
        //  console.log(response[i].SeatNo[j]));
          $('#'+x[i].SeatNo[j]).addClass('red');
      }
    }
  });
};
init();
$(document).ready(function(){


  $('#Seatclass').change(function(){
    var sel=$('#Seatclass').find(":selected").text();
    if(sel=="PREMIER")
    {

    $('#star tr>td>div').addClass('grey');
    $('#premier tr>td>div').removeClass('grey');
    }

    if(sel=="STAR")
    {
      $('#premier tr>td>div').addClass('grey');
      $('#star tr>td>div').removeClass('grey');
    }

  $('#noofseats').change(function(){
    var no = $('#noofseats').find(":selected").text();
    document.getElementById("sno").innerHTML= no;
    var countdiv=[];

$('.green').click(function(){
      $(this).toggleClass("style1");
});

  $('.style1').click(function(){

  if(!($(this).hasClass('grey')||$(this).hasClass('red')))
  {
    if(countdiv.length < no)
    {

      $(this).toggleClass("green");
      var id=$(this).attr('id');
      var cn=$(this).hasClass('green');

      if(cn)
          {

              countdiv.push(id);
              $rootScope.movieSeats=JSON.stringify(countdiv);
                sessionStorage.setItem('movieSeats',$rootScope.movieSeats);
              document.getElementById("seatno").innerHTML=countdiv;
            }

      else{
            var ind=countdiv.indexOf(id);
            countdiv.splice(ind,1);
            $rootScope.movieSeats=JSON.stringify(countdiv);
              sessionStorage.setItem('movieSeats',$rootScope.movieSeats);
          }
if(sel== "STAR")
{
  document.getElementById("amount").innerHTML=countdiv.length*200;
}
else
{
  document.getElementById("amount").innerHTML=countdiv.length*300;
}

}
// else {
//         alert("Yo can book only " + no +" seats");
//   }
}
});


});
});

});
$scope.setPrice=function(a)
{
  $rootScope.movieAmount=document.getElementById("amount").innerHTML;
  sessionStorage.setItem('movieAmount',$rootScope.movieAmount);
  $rootScope.movieSeats1=document.getElementById("seatno").innerHTML;
  sessionStorage.setItem('movieSeats1',$rootScope.movieSeats1);
  $rootScope.movieSeatsNo=document.getElementById("sno").innerHTML;
  sessionStorage.setItem('movieSeatsNo',$rootScope.movieSeatsNo);
var s_no=parseInt(document.getElementById("sno").innerHTML);
var count=0;
$(".green").each(function(){
  count++;
});
if(count==s_no)
$location.path("/payment");
else
  alert('ERROR : Incorrect number of seats selected .');
};
});
