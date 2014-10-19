var auth = require('./auth');
var Patients = require('../models/patients');
var Feedback = require('../models/feedback');

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
      res.redirect('/');
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

  deleteDrug:
    function(req, res, next) {
      Patients.findByIdAndUpdate(
          req.session._id,
          { $pull: {
              'drugs': {
                _id: req.body._id
              }
            }
          },
          function(err, patient) {
            console.log('Delete succeed!');
            console.log(patient);
            res.redirect('/schedule');
          });
    },

  addNewReminder:
    function(req, res, next) {
      Patients.findOne({ _id: req.session._id }, function(err, patient) {

        var newReminder = {
          'added': true,
          'timesADay': req.body.timesADay,
          'dose': req.body.dose,
          'duration': {
            'mon': req.body.monday,
            'tue': req.body.tuesday,
            'wed': req.body.wednesday,
            'thu': req.body.thursday,
            'fri': req.body.friday,
            'sat': req.body.saturday,
            'sun': req.body.sunday
          }
        };

        patient.drugs.id(req.body._id).reminder = newReminder;
        patient.drugs.id(req.body._id).reminderSwitch = true;

        patient.save(function(err) {
          if (err) {
            next(err);
            res.redirect('/schedule');
          }
          console.log('Add reminder succeed!');
          res.redirect('/schedule');
        });
      });
    },

  addNewRefill:
    function(req, res, next) {
      Patients.findByIdAndUpdate(
          req.session._id,
          { $push: {
              'refills': {
                name: req.body.name,
                tabletsADay: req.body.tabletsADay,
                duration: req.body.duration,
                total: req.body.total
              }
            } 
          },
          function(err, patient) {
            console.log('Update succeed!');
            console.log(patient);
            res.redirect('/refill_prescription');
          });
    },
  
  deleteRefill:
    function(req, res, next) {
      Patients.findByIdAndUpdate(
          req.session._id,
          { $pull: {
              'refills': {
                _id: req.body._id
              }
            }
          },
          function(err, patient) {
            console.log('Delete succeed!');
            console.log(patient);
            res.redirect('/refill_prescription');
          });
    },

  timetable: function(req, res, next) {
    Patients.findById(req.session._id, function(err, patient) {
      if (err) {
        console.log(err);
        next(err);
      }
      console.log(patient.drugs);
      res.render('timetable', { pageTitle: "My timetable", bodyId: 'user', patient: patient });
    });
  },

  appraisal: function(req, res, next) {
    Patients.findById(req.session._id, function(err, patient) {
      if (err) {
        console.log(err);
        return res.redirect('/signin/user');
      }
      console.log(patient);
      res.render('appraisal', {pageTitle: 'My Appraisal', bodyId: 'user', patient: patient});
    });
  },

  refillPrescription: function(req, res, next) {
    Patients.findById(req.session._id, function(err, patient) {
      if (err) {
        console.log(err);
        return res.redirect('/signin/user');
      }
      console.log(patient);
      res.render('refillPrescription', {pageTitle: 'Refill Prescription', bodyId: 'user', patient: patient});
    });
  },
  
  feedback: function(req, res, next) {
    Patients.findById(req.session._id, function(err, patient) {
      if (err) {
        console.log(err);
        return res.redirect('/signin/user');
      }
      console.log(patient);
      var succeed = req.query.succeed === '1';
      res.render('feedback', {pageTitle: 'Feedback', bodyId: 'user', patient: patient, succeed: succeed});
    });
  },       
  
  addFeedback: function(req, res, next) {
    var feedback = new Feedback();
    feedback.name = req.body.name;
    feedback.phone = req.body.phone;
    feedback.email = req.body.email;
    feedback.content = req.body.content;
    
    feedback.save(function(err) {
      if (err) {
        console.log(err);
        next(err);
      }
    });
    
    res.redirect('/feedback?succeed=1');
  },

  personalCenter: function(req, res, next) {
    Patients.findById(req.session._id, function(err, patient) {
      if (err) {
        console.log(err);
        return res.redirect('/signin/user');
      }
      console.log(patient);
      res.render('personalCenter', {pageTitle: 'Personal Center', bodyId: 'user', patient: patient});
    });
  }
}
