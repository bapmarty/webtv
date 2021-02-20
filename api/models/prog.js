const mongoose = require('mongoose');

const progSchema = new mongoose.Schema({
  monday: [{
    game: String,
    hour_start: String,
    hour_end: String
  }],
  tuesday: [{
    game: String,
    hour_start: String,
    hour_end: String
  }],
  wednesday: [{
    game: String,
    hour_start: String,
    hour_end: String
  }],
  thursday: [{
    game: String,
    hour_start: String,
    hour_end: String
  }],
  friday: [{
    game: String,
    hour_start: String,
    hour_end: String
  }],
  saturday: [{
    game: String,
    hour_start: String,
    hour_end: String
  }],
  sunday: [{
    game: String,
    hour_start: String,
    hour_end: String
  }]
})

module.exports = mongoose.model('Prog', progSchema);