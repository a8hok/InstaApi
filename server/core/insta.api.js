var Insta = require('./CONSTANT.js'),
    request = require('request'),
    InstaApi = {};

//Get user id using username 
InstaApi.getInstaUserDetails = function(userName, callback) {

    if (userName) {
        request(Insta.URL + '/users/search?q=' + userName + '&client_id=' + Insta.CLIENT_ID, function(error, response, result) {
            if (!error) {
                result = JSON.parse(result);
                console.log('result', result);
                if (result && result.data && result.data[0] && result.data[0].id && userName === result.data[0].username) {
                    InstaApi.getUserDetails(result, callback);
                } else {
                    var errMsg = {
                        "status": 500,
                        "message": "Oops invalid username",
                        "name": "Internal server error"
                    };
                    return callback(errMsg);
                }
            } //If ternal if ends here
        });
    } //if ends here
};

InstaApi.getUserDetails = function(response, callback) {
    if (response && response.data[0]) {
        request(Insta.URL + '/users/' + response.data[0].id + '/?access_token=' + Insta.ACCESS_TOKEN, function(error, response, result) {
            if (!error) {
                result = JSON.parse(result);
                if (result && result.data) {
                    return callback(result.data);
                } else {
                    var errMsg = {
                        "status": 500,
                        "message": "Oops invalid username",
                        "name": "Internal server error"
                    };
                    return callback(errMsg);
                }
            }
        });
    }
};
module.exports = InstaApi;
