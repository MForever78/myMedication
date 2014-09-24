var user = require('./user');
var page = require('./page');

module.exports = function(app) {
  
  // user related
  // app.post('/login', user.login);
  // app.get('/logout', user.logout);

  // page
  app.get('/', page.index);
  app.get('/signin/user$', page.signin.user);
  app.get('/signin/admin$', page.signin.admin);
  app.get('/statistic', page.admin.statistic);
  app.get('/medicineinfo', page.admin.medicineInfo);
  app.get('/schedule', page.user.schedule);
  app.get('/appraisal', page.user.appraisal);
  app.get('/refill_prescription', page.user.refillPrescription);
  app.get('/feedback', page.user.feedback);
  app.get('/personal_center', page.user.personalCenter);
  //app.get('/about', page.about);

  // 404 handler
  app.use(function(req, res, next) {
    res.status(404);
    res.render('404', { pageTitle: 'Not Found - My Medication', bodyId: 'notFound'});
  });

  // 500 handler
  app.use(function(err, req, res, next) {
    console.err(err.stack);
    res.status(500);
    res.render('500', {pageTitle: 'Error - My Medication', bodyId: 'error'});
  });

};
