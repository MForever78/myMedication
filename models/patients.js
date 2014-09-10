var mongoose = require('mongoose');

var patientsSchema = mongoose.Schema({
  name: String,
  username: String,
  salt: String,
  password: String,
  reminders: [String],
  drug: [String],
  info: String,
  year: Number,
  month: Number,
  day: Number,
  gender: String,
  img: String,
});

var Patients = mongoose.model('Patients', patientsSchema);
module.exports = Patients;
