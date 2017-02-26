var dbConnection = require('../config/dbConfig.js'),
    mongoclient = dbConnection.mongoclient,
    async = require('async'),
    db = dbConnection.db,
    login = {};
login.checkUserLogin = function(req, res, callback) {
    var userDetails = req.query;
    db.collection('user', function(err, collection) {
        if (err) {
            res.send({
                'error': 'An error has occurred'
            });
        } else {
            collection.findOne({
                'status': true,
                $and: [{
                    'name': userDto.name
                }, {
                    'password': userDto.password
                }]
            }, function(err, result) {
                if (err) {
                    res.send({
                        'error': 'An error has occurred'
                    });
                } else {
                    console.log('may be', result);
                    data.result = result;
                    res.send(data);
                }
            });
        } //else ends here
    });
};
module.exports = login;
