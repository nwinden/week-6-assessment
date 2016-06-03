var express = require('express');
var router = express.Router();
var Hero = require('../models/hero');
var SuperPower = require('../models/superpower');


//returns all the superpowers in the DB
router.get('/', function (req, res) {
  SuperPower.find({}, function (err, powers) {

    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(powers);
  });
});

//posts a hero to the heros DB
router.post('/', function (req, res) {
  var superhero = new Hero(req.body);
  superhero.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});

module.exports = router;
