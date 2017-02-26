define([

    "client/login/controller/login.controller",
    "client/login/service/login.service"
], function(loginCtrl, loginService) {
    'use strict';

    var login = angular.module("login", ['constant'])
        .service("loginService", loginService)
        .controller("loginCtrl", loginCtrl)
    return login;
});
