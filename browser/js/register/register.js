app.config(function ($stateProvider) {

    $stateProvider.state('register', {
        url: '/register',
        templateUrl: 'js/register/register.html',
        controller: 'RegisterCtrl'
    });

});

app.controller('RegisterCtrl', function ($scope, $rootScope, $state, AuthService, RegisterFactory) {

    $scope.register = {
        email: null,
        password: null
    };
    
    $scope.signUp = function(newInfo) {

        RegisterFactory.newUser(newInfo).then(function(result) {

            var loginInfo = {
                email: result.email,
                password: newInfo.password
            };

            AuthService.login(loginInfo).then(function (response) {
                $state.go('home');
            });

        })
    };

});