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

};
