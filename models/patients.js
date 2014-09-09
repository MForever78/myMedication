var mongoose = require('mongoose');

var patientsSchema = mongoose.Schema({
  name: String,
  username: String,
  salt: String,
  password: String,
  reminder: String,
  drug: [String],
  info: String,
  year: Number,
  month: Number,
  day: Number,
  gender: String,
});

var Patients = mongoose.model('Patients', patientsSchema);
module.exports = Patients;
