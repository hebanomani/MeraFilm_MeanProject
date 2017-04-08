angular.module('meraFilm').controller('RegisterController', function($scope, $http) {
    $scope.RegisterUser = function() {
        $http.post('/api/signup', $scope.User).then(function(response) {
            alert('User Registration Successful');
        });
    }
});
