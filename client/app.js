
var app = angular.module('meraFilm', ['ngRoute','angular.filter', 'ngCookies', 'ngStorage']);
app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'HomeController'
  }).when('/About', {
    templateUrl: 'views/about.html',
    controller: 'AboutController'
  }).when('/Contact', {
    templateUrl: 'views/contact.html',
    controller: 'ContactController'
  }).when('/Admin', {
    templateUrl: 'views/admin.html',
    controller: 'AdminController',
    resolve: {
            logincheck: checkLoggedIn
        }
  }).when('/Admin/AddMovies', {
    templateUrl: 'views/addmovies.html',
    controller: 'AddMoviesController'
  }).when('/Admin/AddTheatre', {
    templateUrl: 'views/addtheatre.html',
    controller: 'AddTheatreController'
  }).when('/Admin/Mapping', {
    templateUrl: 'views/mapping.html',
    controller: 'MappingController'
  }).when('/Booking', {
    templateUrl: 'views/BookingShow.html',
   controller: 'BookingController'
  }).when('/seats',{
    templateUrl: 'views/BookingSeats.html',
   controller: 'SeatController'
 }).when('/payment',{
   templateUrl: 'views/payment.html',
  controller: 'PaymentController'
}).when('/confirm',{
  templateUrl: 'views/ConfirmPage.html',
 controller: 'ConfirmController'
}).when('/Register', {
        templateUrl: 'views/Register.html',
        controller: 'RegisterController'
}).when('/Login', {
        templateUrl: 'views/Login.html',
        controller: 'LoginController'
});

});

var checkLoggedIn = function($q, $http, $location, $rootScope) {
    var deferred = $q.defer();
    $http.get('/api/loggedin').then(function(user) {
        if (user.data != '0') {
            $rootScope.currentUser = user.data;
            deferred.resolve();
            console.log('User Logged in');
        } else {
            deferred.reject();
            $location.url('/Login');
            console.log('User is not logged in');
        }
    });
    return deferred.promise;
}
