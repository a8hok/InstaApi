define([
    "angular-amd",
    "angular",
    "ngload",
    "ui-router",
    "loginModule",
    "signupModule",
    "homeModule"

], function(angularAMD) {

    'use strict';
    var app = angular.module('app', ["ui.router", "login", "signup", "home"]);

    app.config(['$stateProvider',
        function($stateProvider) {
            //Route for login
            $stateProvider.state("login", angularAMD.route({
                url: '/login',
                templateUrl: 'client/login/view/login.html',
                views: {
                    '': {
                        templateUrl: 'client/login/view/login.html',
                        controller: 'loginCtrl as login',
                    },
                    'footer@login': {
                        templateUrl: 'footer.view.html'
                    },
                },
                controllerUrl: 'ngload!loginModule',
            }));

            //Route for signup
            $stateProvider.state("signup", angularAMD.route({
                url: '/signup',
                templateUrl: 'client/signup/view/signup.html',
                controller: 'signupCtrl as signup',
                controllerUrl: 'ngload!signupModule',
            }));

            //After signup - Home page route
            $stateProvider.state("welcome", angularAMD.route({
                params: { 'userObj': null },
                url: '/welcome',
                templateUrl: 'client/home/view/home.html',
                controller: 'homeCtrl as home',
                resolve: {
                    userObj: ['$stateParams', function($stateParams) {
                        return $stateParams.userObj;
                    }]
                },
                controllerUrl: 'ngload!homeModule',

            }));

        }
    ]);
    return angularAMD.bootstrap(app);
});
