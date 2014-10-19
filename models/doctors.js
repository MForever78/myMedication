var mongoose = require('mongoose');

var doctorsSchema = mongoose.Schema({
  name: String,
  username: { type: String, trim: true, required: true },
  salt: { type: String, required: true },
  password: { type: String, required: true },
  img: { type: String, default: '/img/admin-avatar.png' },
});

var Doctors = mongoose.model('Doctors', doctorsSchema);
module.exports = Doctors;
