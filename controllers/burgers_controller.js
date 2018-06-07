var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

 router.get("/burgers", function(req, res) {
    burgers.selectAll(function(data) {
        console.log("data", data)
        res.render("index", {allBurgers: data});
    });
  });
  
  router.post("/burgers/create", function(req, res) {
      console.log(req.body);
    burgers.insertOne([""], [req.body.burgerData], function(result) {
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/burgers/eat/:id", function(req, res) {
    burgers.updateOne(req.params.id, function() {
        res.redirect('/burgers');
      });
  });
  
module.exports = router;
