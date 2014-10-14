var mongoose = require('mongoose');

var drugsSchema = mongoose.Schema({
  name: String,
  description: String,
  sideEffects: [String],
  reviews: [String],
  img: { type: String, default: '/img/demo_drug.png' },
});

var Drugs = mongoose.model('Drugs', drugsSchema);
module.exports = Drugs;
