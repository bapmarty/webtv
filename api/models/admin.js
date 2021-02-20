const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  _uid: String,
  pseudo: String,
  password: String
})

module.exports = mongoose.model('Admin', adminSchema);