app.factory('RegisterFactory', function($http) {
    return {
        newUser: function(newInfo) {
            return $http.post('/api/register', newInfo).then(function(response) {
                return response.data;
            });
        }
    }
});