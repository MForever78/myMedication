var mongoose = require('mongoose');

var feedbackSchema = mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  content: String,
});

var Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
