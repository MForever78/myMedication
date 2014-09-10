var mongoose = require('mongoose');

var sideEffectsSchema = mongoose.Schema({
  content: String,
  patient: String,
});

var SideEffects = mongoose.model('SideEffects', sideEffectsSchema);
module.exports = SideEffects;
