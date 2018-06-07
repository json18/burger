var connection = require("../config/connection.js");

var orm = { 
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },

    insertOne: function(table, cb) {
        var queryString = "INSERT INTO " + table + ";";
        connection.query(queryString, function(err,result) {
            if (err){
                throw err;
            }
            cb(result);
        });
        },

    updateOne: function(table, name, status, cb) {
        var queryString = "UPDATE " + table + ";" 
        queryString = queryString + "SET " + status + ";"
        queryString = queryString + "WHERE" +  name + ";"

        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
    };
module.exports = orm;
