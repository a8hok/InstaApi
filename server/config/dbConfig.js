/*
 * File : dbConfig.js
 * Description : This file contains all db connections
 */

var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

var dbConnection = function() {
    this.connection = '';
}

// dbConnection.mongoclient = new MongoClient(new Server('localhost', 27017, {'native_parser':true})); 
// dbConnection.db = dbConnection.mongoclient.db('learn');
dbConnection.mongoclient = new MongoClient(new Server('127.0.0.1', 27017, { 'native_parser': true }));
dbConnection.db = dbConnection.mongoclient.db('instagram');

module.exports = dbConnection;
