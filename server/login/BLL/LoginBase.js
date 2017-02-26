/*
 * LoginBase
 * All logics about login comes here and thats hit the DAL layer
 */
'use strict';
var async = require('async'),
    loginDAL = require('../DAL/LoginDAL.js');
//LoginBase constructor
function LoginBase() {}

LoginBase.prototype.checkUserExists = function(userDto, res, callback) {
    var checkUser = function(callback) {
        userDto = userDto.query;
        loginDAL.checkUserExists(userDto, res, callback);
    };
    return async.waterfall([checkUser], callback);
};

module.exports = LoginBase;
