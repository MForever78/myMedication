var mongoose = require('mongoose');

var remindersSchema = mongoose.Schema({
  drug: String,
  takingTime: String,
  unit: String,
  surplus: Number,
  switchStatus: Boolean,
});

var Reminders = mongoose.model('Reminders', remindersSchema);
module.exports = Reminders;
