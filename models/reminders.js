var mongoose = require('mongoose');

var remindersSchema = mongoose.Schema({
  takingTime: Number,
  dose: Number,
  date: Date,
  duration: Number,
});

var Reminders = mongoose.model('Reminders', remindersSchema);
module.exports = Reminders;
