var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema for the hero
var HeroSchema = new Schema({

  alias: { type: String, required: true, index: { unique: true } },
  first_name: String,
  last_name: String,
  city: String,
  power_name: String

});

var Hero = mongoose.model('Hero', HeroSchema);

module.exports = Hero;
