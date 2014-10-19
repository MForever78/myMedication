var user = require('./user');
var signup = require('./signup');
var page = require('./page');

function restrict(req, res, next) {
  if (req.session._id) {
    next();
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/signin/user');
  }
};

module.exports = function(app) {
  
  // user related
  // app.post('/login', user.login);
  // app.get('/logout', user.logout);

  // page
  app.get('/', page.index);
  app.get('/signin/user$', page.signin.user);
  app.get('/signin/admin$', page.signin.admin);
  app.get('/signup$', page.signup);
  app.get('/statistic', restrict, page.admin.statistic);
  app.get('/medicineinfo', restrict, page.admin.medicineInfo);
  app.get('/schedule', restrict, user.schedule);
  app.get('/timetable', restrict, user.timetable);
  app.get('/appraisal', restrict, user.appraisal);
  app.get('/refill_prescription', restrict, user.refillPrescription);
  app.get('/feedback', restrict, user.feedback);
  app.get('/personal_center', restrict, user.personalCenter);
  app.post('/signup$', signup);
  app.post('/signin/user', user.authPatient);
  app.post('/addNewDrugSchedule', user.addNewDrug);
  app.post('/deleteDrugSchedule', user.deleteDrug);
  app.post('/addNewReminder', user.addNewReminder);
  app.get('/logout', user.logout);
  // Test 500
  app.get('/500', function(req, res, next) {
    res.render('500', { pageTitle: 'Error - My Medication', bodyId: 'error' });
  });
  //app.get('/about', page.about);

  // 404 handler
  app.use(function(req, res, next) {
    res.status(404);
    res.render('404', { pageTitle: 'Not Found - My Medication', bodyId: 'error'});
  });

  // 500 handler
  app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(500);
    res.render('500', {pageTitle: 'Error - My Medication', bodyId: 'error'});
  });

};
