require.config({

    baseUrl: "",
    paths: {
        "angular": "lib/angular.min",
        "angularAMD": "lib/angularAMD.min",
        "ui-router": "lib/angular-ui-router.min",
        "ngload": " lib/ngload",
        "signupModule": "client/signup/signup.application",
        "homeModule": "client/home/home.application",
        "loginModule": "client/login/login.application",
        "constant": "client/core/constant"
    },
    shim: {
        "angularAMD": ["angular"],
        "ui-router": ["angular"]
    },
    deps: ['app']
});
