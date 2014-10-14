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
      res.redirect('/');
    }
}
