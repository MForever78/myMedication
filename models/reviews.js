var mongoose = require('mongoose');

var reviewsSchema = mongoose.Schema({
  content: String,
  patient: String,
});

var Reviews = mongoose.model('Reviews', reviewsSchema);
module.exports = Reviews;
