var mongoose = require('mongoose');

var doctorsSchema = mongoose.Schema({
  name: String,
  username: String,
  salt: String,
  password: String,
});

var Doctors = mongoose.model('Doctors', doctorsSchema);
module.exports = Doctors;
