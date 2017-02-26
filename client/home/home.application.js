define([
    "client/home/controller/home.controller"
], function(homeCtrl) {
    'use strict';
    var home = angular.module("home", [])
        .controller("homeCtrl", homeCtrl);
    return home;
});
