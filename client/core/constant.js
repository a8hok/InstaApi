define([], function() {
    'use strict';
    var constant = angular.module('constant', [])
        .constant('INSTA_API_URL', 'http://localhost:8999');
    return constant;
});
