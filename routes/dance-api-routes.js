var db = require("../models");

module.exports = function(app) {


  app.get("/api/dances", function(req, res) {
    var danceArray = [];
    db.Dance.findAll({
    }).then(function(results) {
        results.forEach(element =>
          danceArray.push(element.dataValues));
        console.log(danceArray)
        res.json(danceArray); 
    });
  });


  app.post("/api/dances", function(req, res) {
    db.Dance.create({
      danceTitle: req.body.danceTitle
    }).then(function(results) {
      res.json(results);
    });
  });

  app.delete("/api/dances/:id", function(req, res) {
    db.Dance.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    });
  });

};
