var dbConnection = require('../config/dbConfig.js'),
    InstaApi = require('./insta.api.js'),
    mongoclient = dbConnection.mongoclient,
    async = require('async'),
    db = dbConnection.db,
    signup = {};


signup.saveAuthendicatedUser = function(req, res, callback) {
    var user = req.body,
        //Get user details from Instagram API
        getInstaUserDetails = function(callback) {
            return InstaApi.getInstaUserDetails(user.InsProName, callback);
        },

        //Store user details 
        addUser = function(response) {

            if (response.status !== 500) {
                db.collection('user', function(err, collection) {
                    collection.insert(response, {
                        safe: true
                    }, function(err, result) {
                        if (err) {
                            res.send({
                                'error': 'An error has occurred'
                            });
                        } else {
                            res.send(result[0]);
                        }
                    });
                });
            } else res.send(response);
        };
    return async.parallel([getInstaUserDetails], addUser);
};
module.exports = signup;
