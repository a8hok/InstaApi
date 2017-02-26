define([
    "client/signup/controller/signup.controller",
    "client/signup/service/signup.service",
    "constant"
], function(signupCtrl, signupService) {
    'use strict';
    var signup = angular.module("signup", ['constant'])
        .controller("signupCtrl", signupCtrl)
        .service("signupService", signupService);
    return signup;
});
