var auth = require('./auth');
var Doctors = require('../models/doctors');
var Feedback = require('../models/feedback');

module.exports = {
  authDoctor: 
    function(req, res) {
      auth(Doctors, req.body.username, req.body.password, function(err, _id) {
        if (_id) {
          req.session.regenerate(function() {
            req.session._id = _id;
            req.session.type = 'Admin';
            res.redirect('/statistic');
          });
        } else {
          console.log('Admin sign in failed');
          res.redirect('/signin/admin');
        }
      });
    },

  statistic: function(req, res, next) {
    res.render('statistic', {pageTitle: 'Statistic - My Medication', bodyId: 'user'});
  },

  medicineInfo: function(req, res, next) {
    res.render('medicineInfo', {pageTitle: 'Medicine Information - My Medication', bodyId: 'user'});
  },

  questions: function(req, res, next) {
    Feedback.find({}, function(err, feedback) {
      res.render('questions', {pageTitle: 'Questions', bodyId: 'user', feedback: feedback});
    });
  }
}
