var auth = require('./auth');
var Patients = require('../models/patients');

module.exports = {
  authPatient:
    function(req, res) {
      auth(Patients, req.body.username, req.body.password, function(err, _id) {
        if (_id) {
          req.session.regenerate(function() {
            req.session._id = _id;
            res.redirect('/schedule');
          });
        } else {
          console.log('User sign in failed');
          res.redirect('/signin/user');
        }
      });
    },

  logout:
    function(req, res, next) {
      req.session.destroy(function(err) {
        if (err) {
          console.log(err);
          next(err);
        }
        console.log("User logged out!");
      });
      res.redirect(303, '/');
    },
  
  schedule: 
    function(req, res, next) {
      Patients.findById(req.session._id, function(err, patient) {
        if (err) {
          console.log(err);
          return res.redirect('/signin/user');
        }
        console.log(patient);
        res.render('schedule', {pageTitle: 'My Medication Schedule', bodyId: 'user', patient: patient});
      });
  },

  addNewDrug:
    function(req, res, next) {
      Patients.findByIdAndUpdate(
          req.session._id,
          { $push: {
              'drugs': {
                name: req.body.drugName,
                takingTime: req.body.takingTime,
                unit: req.body.unit,
                surplus: req.body.surplus
              }
            } 
          },
        function(err, patient) {
          console.log('Update succeed!');
          console.log(patient);
          res.redirect('/schedule');
        });
    },

  appraisal: function(req, res, next) {
    res.render('appraisal', {pageTitle: 'My Appraisal', bodyId: 'user'});
  },
  refillPrescription: function(req, res, next) {
    res.render('refillPrescription', {pageTitle: 'Refill Prescription', bodyId: 'user'});
  },
  feedback: function(req, res, next) {
    res.render('feedback', {pageTitle: 'Feedback', bodyId: 'user'});
  }, 
  personalCenter: function(req, res, next) {
    res.render('personalCenter', {pageTitle: 'Personal Center', bodyId: 'user'});
  }
}
