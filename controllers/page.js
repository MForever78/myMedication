module.exports = {
  
  index: function(req, res, next) {
    res.render('index', {pageTitle: 'My Medication'});
  },

  signin: {
    user: function(req, res, next) {
    res.render('userSignin', {pageTitle: 'User Sign in - My Medication', bodyId: 'signin'});
  },

    admin: function(req, res, next) {
      res.render('adminSignin', {pageTitle: 'Administrator Sign in - My Medication', bodyId: 'signin'});
    }
  },

  admin: {
    statistic: function(req, res, next) {
      res.render('statistic', {pageTitle: 'Administrator - My Medication'});
    },
    medicineInfo: function(req, res, next) {
      res.render('medicineInfo', {pageTitle: 'Medicine Information - My Medication'});
    }
  },

  signup: function(req, res, next) {
    res.render('signup', {pageTitle: 'Sign up - My Medication', bodyId: 'signin'});
  },

  user: {
    schedule: function(req, res, next) {
      res.render('schedule', {pageTitle: 'My Medication Schedule', bodyId: 'user'});
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

}
