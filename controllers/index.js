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
  app.get('/admin/statistic', page.admin.statistic);
  app.get('/admin/medicineinfo', page.admin.medicineinfo);
  app.get('/admin$', page.admin.statistic);
  app.get('/user/schedule', page.user.schedule);
  app.get('/user/appraisal', page.user.appraisal);
  app.get('/user/refill_prescription', page.user.refill_prescription);
  app.get('/user/feedback', page.user.feedback);
  app.get('/user/personal_center', page.user.personal_center);
  app.get('/user$', page.user.schedule);
  //app.get('/about', page.about);

};
