var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burger", function(res) {
        cb(res);
      });
    },
    insertOne: function(name, cb) {
      orm.insertOne("burger", name, function(res) {
        cb(res);
      });
    },
    updateOne: function(name, status, cb) {
      orm.updateOne("burger", name, status, function(res) {
        cb(res);
      });
    }
  };

module.exports = burger;