var mongoose = require('mongoose');
var Patients = require('../models/patients');
var pass = require('./pass');

var createNewPatient = function(req, res, next) {
  if (!req.body.username || !req.body.password) {
    res.redirect('/signup');
    return;
  }
  var patient = new Patients();
  patient.username = req.body.username;
  pass.hash(req.body.password, function(err, salt, hash) {
    if (err) {
      console.log(err);
    }
    patient.salt = salt;
    patient.password = hash;
    patient.save(function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("User " + patient.username + " saved.");
      }
    });
  });
  res.redirect('/signin/user');
};

module.exports = createNewPatient;

