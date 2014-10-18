var mongoose = require('mongoose');

var drugScheduleSchema = mongoose.Schema({
  name: String,
  takingTime: String,
  unit: String,
  surplus: Number,
  reminder: String,
  reminderSwitch: Boolean,
});

var DrugSchedule = mongoose.model('DurgSchedule', drugScheduleSchema);
module.exports = DrugSchedule;
