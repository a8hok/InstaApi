/*
 * LoginDAL
 */
var dbConnection = require('../../config/dbConfig.js'),
    mongoclient = dbConnection.mongoclient,
    db = dbConnection.db;
var data = {};
var LoginDAL = {
    checkUserExists: function(userDto, res, callback) {
            db.collection('feed', function(err, collection) {
                if (err) {
                    res.send({
                        'error': 'An error has occurred'
                    });
                } else {
                    collection.findOne({
                        'status': true
                            // $and: [{
                            //     'name': userDto.name
                            // }, {
                            //     'password': userDto.password
                            // }]
                    }, function(err, result) {
                        if (err) {
                            res.send({
                                'error': 'An error has occurred'
                            });
                        } else {
                            console.log('s', result);
                            data.result = result;
                            res.send(data);
                        }
                    });
                } //else ends here
            });
        } // check user exists ends here
}; // variable ends here
module.exports = LoginDAL;
