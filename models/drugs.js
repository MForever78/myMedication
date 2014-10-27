var mongoose = require('mongoose');

var drugsSchema = mongoose.Schema({
  name: String,
  description: String,
  conditions: [ String ],
  img: { type: String, default: '/img/drug_demo.png' },
  create: { type: Date, default: new Date() },
});

var Drugs = mongoose.model('Drugs', drugsSchema);
module.exports = Drugs;
