var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

 router.get("/burgers", function(req, res) {
    burger.selectAll(function(data) {
        console.log("data", data)
        res.render("index", {allBurgers: data});
    });
  });
  
  router.post("/burgers/create", function(req, res) {
      console.log(req.body);
    burger.insertOne([""], [req.body.burgerData], function(result) {
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne(
      {
        sleepy: req.body.sleepy
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });
  
module.exports = router;
