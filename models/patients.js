var mongoose = require('mongoose');

var drugScheduleSchema = mongoose.Schema({
  name: String,
  takingTime: String,
  unit: String,
  surplus: Number,
  reminder: {
    added: { type: Boolean, default: false },
    timesADay: Number,
    dose: Number,
    duration: {
      'mon': { type: Boolean, default: false },
      'tue': { type: Boolean, default: false },
      'wed': { type: Boolean, default: false },
      'thu': { type: Boolean, default: false },
      'fri': { type: Boolean, default: false },
      'sat': { type: Boolean, default: false },
      'sun': { type: Boolean, default: false },
    },
  },
  reminderSwitch: { type: Boolean, default: false },
});

var refillSchema = mongoose.Schema({
  name: String,
  tabletsADay: Number,
  total: Number,
  duration: Number,
});

var patientsSchema = mongoose.Schema({
  name: String,
  username: { type: String, trim: true, required: true },
  salt: { type: String, required: true },
  password: { type: String, required: true },
  drugs: [drugScheduleSchema],
  refills: [refillSchema],
  info: String,
  gender: String,
  img: { type: String, default: "/img/patient-avatar.png" },
});

var Patients = mongoose.model('Patients', patientsSchema);
module.exports = Patients;
