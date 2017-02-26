define([], function() {
    'use strict';
    var loginService = function(INSTA_API_URL, $http, $q) {
        var login = function() {
                this.name = "login";
            },
            deferred = $q.defer();
        login.prototype.checkLoginDetails = function(loginDetails) {
            console.log('loginDetails', loginDetails);
            return $http.get(INSTA_API_URL + '/' + this.name + '?loginDetails=', loginDetails).then(function(response) {
                return response.data;
            }, function(response) {
                // something went wrong
                return deferred.reject(response.data);
            });
        }
        return login;
    };
    return loginService;

});
