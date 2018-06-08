var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
        var hbsObject = {
          burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);    
    });
  });
  
 


router.post("/create", function(req, res) {
    burgers.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function() {
      res.redirect("/burgers");
    });
  });
  

  router.put("/burgers/eat/:id", function(req, res) {
    
  });
  
module.exports = router;


