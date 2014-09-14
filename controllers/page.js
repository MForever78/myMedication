module.exports = {
  
  index: function(req, res, next) {
    res.render('index', {pageTitle: 'Topology'});
  },

  userlogin: function(req, res, next) {
    res.render('userlogin', {pageTitle: 'User Login - Topology'});
  },

  adminlogin: function(req, res, next) {
    res.render('adminlogin', {pageTitle: 'Administrator Login - Topology'});
  },

  admin: {
    statistic: function(req, res, next) {
      res.render('statistic', {pageTitle: 'Administrator - Topology'});
    },
    medicineinfo: function(req, res, next) {
      res.render('medicineinfo', {pageTitle: 'Medicine Information - Topology'});
    }
  },

  user: {
    schedule: function(req, res, next) {
      res.render('schedule', {pageTitle: 'My Medication Schedule'});
    },
    appraisal: function(req, res, next) {
      res.render('appraisal', {pageTitle: 'My Appraisal'});
    },
    refill_prescription: function(req, res, next) {
      res.render('refill_prescription', {pageTitle: 'Refill Prescription'});
    },
    feedback: function(req, res, next) {
      res.render('feedback', {pageTitle: 'Feedback'});
    }, 
    personal_center: function(req, res, next) {
      res.render('personal_center', {pageTitle: 'Personal Center'});
    }
  }

}
