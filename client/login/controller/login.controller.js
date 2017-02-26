define([], function() {
    'use strict';
    var loginCtrl = function(loginService, $q) {
        var loginService = new loginService(),
            deferred = $q.defer();
        self = this;
        self.loginDetails = {};
        // Save login user details
        self.checkLoginDetails = function() {
            loginService.checkLoginDetails(self.loginDetails).then(function(data) {
                deferred.resolve(data);
            }, function() {
                deferred.reject();
            });
        }
    };
    return loginCtrl;
});
