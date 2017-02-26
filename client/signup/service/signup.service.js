define([], function() {
    'use strict';
    var signupService = function(INSTA_API_URL, $http, $q) {
        var signup = function() {
                this.name = "signup";
            },
            deferred = $q.defer();
        signup.prototype.saveSignupDetails = function(signupDetails) {
            return $http.post(INSTA_API_URL + '/' + this.name, signupDetails).then(function(response) {
                return response.data;
            }, function(response) {
                // something went wrong
                return deferred.reject(response.data);
            });
        }
        return signup;
    };
    return signupService;

});
