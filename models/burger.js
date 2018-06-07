var orm = require("../config/orm.js");

var burgers = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function(name, cb) {
      orm.insertOne("burgers", name, function(res) {
        cb(res);
      });
    },
    updateOne: function(name, status, cb) {
      orm.updateOne("burgers", name, status, function(res) {
        cb(res);
      });
    }
  };

module.exports = burgers;