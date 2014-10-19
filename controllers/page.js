module.exports = {
  
  index: function(req, res, next) {
    res.render('index', {pageTitle: 'My Medication'});
  },

  signin: {
    user: function(req, res, next) {
      if (req.session._id !== undefined) {
        res.redirect('/schedule');
      } else {
        res.render('userSignin', {pageTitle: 'User Sign in - My Medication', bodyId: 'signin'});
      }
  },

    admin: function(req, res, next) {
      res.render('adminSignin', {pageTitle: 'Administrator Sign in - My Medication', bodyId: 'signin'});
    }
  },

  signup: function(req, res, next) {
    res.render('signup', {pageTitle: 'Sign up - My Medication', bodyId: 'signin'});
  }

}
