var mongoose = require('mongoose');

var drugsSchema = mongoose.Schema({
  name: String,
  description: String,
  sideEffects: [String],
  reviews: [String],
  img: String,
});

var Drugs = mongoose.model('Drugs', drugsSchema);
module.exports = Drugs;
