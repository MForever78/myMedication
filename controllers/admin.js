var auth = require('./auth');
var Doctors = require('../models/doctors');

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
    res.render('statistic', {pageTitle: 'Administrator - My Medication', bodyId: 'user'});
  },

  medicineInfo: function(req, res, next) {
    res.render('medicineInfo', {pageTitle: 'Medicine Information - My Medication', bodyId: 'user'});
  }
}
