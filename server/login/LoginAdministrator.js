/*
 * LSADMINISTRATOR
 * All login collection related calls must get through this layer
 */
'use strict';

var LoginBase = require('./BLL/LoginBase.js'),

    loginBase = new LoginBase(),

    loginDal = require('./DAL/LoginDal.js');

// login Administrtor constructor
function LoginAdministrator() {}

LoginAdministrator.prototype.checkUserExists = function(req, res, callback) {
    console.log(req.query);
    return loginBase.checkUserExists(req, res, callback);
};

module.exports = LoginAdministrator;
