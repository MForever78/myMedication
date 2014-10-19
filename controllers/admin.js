var Doctors = require('../models/doctors');

module.exports = {
    statistic: function(req, res, next) {
      res.render('statistic', {pageTitle: 'Administrator - My Medication', bodyId: 'user'});
    },

    medicineInfo: function(req, res, next) {
      res.render('medicineInfo', {pageTitle: 'Medicine Information - My Medication', bodyId: 'user'});
    }
}
