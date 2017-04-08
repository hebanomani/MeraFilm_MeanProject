angular.module('meraFilm').controller('MappingController', function($http, $scope) {

      $(document).ready(function(){
          $("#myDate").datepicker({ dateFormat: 'dd, M yy' });
          $("#add").click(function () {
            var text=($("#hh").val())+" : "+($("#mm").val())+" "+($("#t").val());
        $('#res').append("<option value='"+text+"'>"+text+"</option>");
       });
      });

    var init = function(){
        $http.get('/api1/movie', $scope.movieData).then(function (response) {
          $scope.movieData=response.data;
        //  console.log($scope.movieData);
        });
        $http.get('/api2/theatres', $scope.theatreData).then(function (response) {
          $scope.theatreData=response.data;
        //  console.log($scope.theatreData);
        });
        $http.get('/api3/moviemapping',$scope.mapping).then(function (response) {
          $scope.mappingData=response.data;
        });
      };
      init();

    $scope.insertMapping = function(){
      var arr=[];
      var length = $('#res').children('option').length;
      for(var i=0;i<length;i++)
      {
        arr[i]=$('#res option').eq(i).val();
        console.log(arr[i]);
      }
      $scope.mapping.ShowTimings=arr;
      $scope.mapping.ShowDate=$('#myDate').val();
      $http.post('/api3/newMapping', $scope.mapping).then(function (response) {
      });
      var val='true';
     $http.put('/api1/updateMovie/' + $scope.mapping.Title+'/'+val).then(function (response) {
          console.log(response);
        })
          window.location.reload();
          init();
      $scope.mapping='';
    };
    init();

    $scope.showMapping=function()
    {
      $http.get('/api3/selmovie/'+$scope.mapping.Theatre).then(function (response) {
        $scope.searchmovieData=response;
      });
        window.location.reload();
        init();
    };
    init();


    $scope.deleteMapping = function(map){
      var x=confirm("Are you sure you want to delete ?");
      if(x){
        $http.delete('/api3/deleteMapping/'+map._id).then(function (response) {
      });
      $http.get('/api3/moviemapping').then(function (response) {
        $scope.mappingData=response;
      });
      $http.get('/api3/selmoviename/'+map.Title).then(function (response) {
        len=response.length;
        if(len==0)
        {
          var val='false';
     $http.put('/api1/updateMovie/'+map.Title+'/'+val).then(function (response) {
             });
        }
      });
    }
      window.location.reload();
      init();
    };
    init();

  });
