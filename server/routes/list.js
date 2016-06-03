var express = require('express');
var router = express.Router();
var Hero = require('../models/hero');
var SuperPower = require('../models/superpower');


//gets a hero from the heros DB
router.get('/', function (req, res) {
  Hero.find({}, function (err, heros) {

    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(heros);
  });
});

//delets a hero from the DB
router.delete('/:id', function (req, res) {
  Hero.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(204);
  });
});

module.exports = router;
