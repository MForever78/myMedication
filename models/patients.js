var mongoose = require('mongoose');

var patientsSchema = mongoose.Schema({
  name: String,
  username: { type: String, trim: true, required: true },
  salt: { type: String, required: true },
  password: { type: String, required: true },
  drugs: [{
    name: String,
    takingTime: String,
    unit: String,
    surplus: Number,
    reminder: String,
    reminderSwitch: Boolean,
  }],
  info: String,
  gender: String,
  img: { type: String, default: "/img/patient-avatar.png" },
});

var Patients = mongoose.model('Patients', patientsSchema);
module.exports = Patients;
