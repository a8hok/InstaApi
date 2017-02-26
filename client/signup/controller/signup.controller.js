define([], function() {
    'use strict';
    var signupCtrl = function(signupService, $q, $state) {
        //Variable declarations
        var signupService = new signupService(),
            deferred = $q.defer();
        self = this;
        self.signupDetails = {};

        // Save Signup user details
        self.saveSignupDetails = function() {
                signupService.saveSignupDetails(self.signupDetails).then(function(data) {
                    if (!data.status) {
                        deferred.resolve(data);
                        $state.go('welcome', { userObj: data }); // if signup success it navigate to welcome instagram page
                    } else alert(data.message);
                }, function() {
                    deferred.reject();
                });
            } // saveSignupDetails ends here
    };
    return signupCtrl;
});
