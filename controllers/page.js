module.exports = {
  
  index: function(req, res, next) {
    res.render('index', {pageTitle: 'Topology'});
  },

  signin: {
    user: function(req, res, next) {
    res.render('userSignin', {pageTitle: 'User Sign in - Topology', bodyId: 'signin'});
  },

    admin: function(req, res, next) {
      res.render('adminSignin', {pageTitle: 'Administrator Sign in - Topology', bodyId: 'signin'});
    }
  },

  admin: {
    statistic: function(req, res, next) {
      res.render('statistic', {pageTitle: 'Administrator - Topology'});
    },
    medicineInfo: function(req, res, next) {
      res.render('medicineInfo', {pageTitle: 'Medicine Information - Topology'});
    }
  },

  user: {
    schedule: function(req, res, next) {
      res.render('schedule', {pageTitle: 'My Medication Schedule'});
    },
    appraisal: function(req, res, next) {
      res.render('appraisal', {pageTitle: 'My Appraisal'});
    },
    refillPrescription: function(req, res, next) {
      res.render('refillPrescription', {pageTitle: 'Refill Prescription'});
    },
    feedback: function(req, res, next) {
      res.render('feedback', {pageTitle: 'Feedback'});
    }, 
    personalCenter: function(req, res, next) {
      res.render('personalCenter', {pageTitle: 'Personal Center'});
    }
  }

}
