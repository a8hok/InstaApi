/*
 * Author - Ashokkumar
 * Date of creation - 21-Nov-2016
 * Description - To launch the app
 * Requirements - Express
 */
var express = require('express'),
    cons = require('consolidate'),
    bodyParser = require('body-parser'),
    dbConnection = require('./server/config/dbConfig.js'),
    mongoclient = dbConnection.mongoclient,
    signup = require('./server/core/signup.js'),
    login = require('./server/core/login.js'),
    app = express();

//Application configuration
app.set('port', 8999);
app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


//Application route
app.post('/signup', signup.saveAuthendicatedUser);
app.get('/login', login.checkUserLogin);


//server listening in port
mongoclient.open(function(err, mongoclient) {
    if (err) throw err;
    app.listen(app.get('port'), function() {
        console.log('Express server listening on port ' + app.get('port'));
    });
});
