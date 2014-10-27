module.exports = {
  
  index: function(req, res, next) {
    res.render('index', {pageTitle: 'My Medication'});
  },

  signin: {
    user: function(req, res, next) {
      if (req.session._id !== undefined) {
        if (req.session.type == 'Admin')
          res.redirect('/statistic');
        else
          res.redirect('/schedule');
      } else {
        res.render('userSignin', {pageTitle: 'User Sign in - My Medication', bodyId: 'signin'});
      }
    },

    admin: function(req, res, next) {
      if (req.session._id !== undefined && req.session.type == 'Admin') {
        res.redirect('/statistic');
      } else {
        res.render('adminSignin', {pageTitle: 'Administrator Sign in - My Medication', bodyId: 'signin'});
      }
    }
  },

  signup: function(req, res, next) {
    res.render('signup', {pageTitle: 'Sign up - My Medication', bodyId: 'signin'});
  },


}
