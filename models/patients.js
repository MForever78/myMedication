var mongoose = require('mongoose');

var drugScheduleSchema = mongoose.Schema({
  name: String,
  takingTime: String,
  unit: String,
  surplus: Number,
  reminder: {
    added: { type: Boolean, default: false },
    takingTime: String,
    dose: Number,
    duration: Number,
    date: Date,
  },
  reminderSwitch: { type: Boolean, default: false },
});

var patientsSchema = mongoose.Schema({
  name: String,
  username: { type: String, trim: true, required: true },
  salt: { type: String, required: true },
  password: { type: String, required: true },
  drugs: [drugScheduleSchema],
  info: String,
  gender: String,
  img: { type: String, default: "/img/patient-avatar.png" },
});

var Patients = mongoose.model('Patients', patientsSchema);
module.exports = Patients;
