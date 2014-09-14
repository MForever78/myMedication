var user = require('./user');
var page = require('./page');

module.exports = function(app) {
  
  // user related
  // app.post('/login', user.login);
  // app.get('/logout', user.logout);

  // page
  app.get('/', page.index);
  app.get('/userlogin', page.userlogin);
  app.get('/adminlogin', page.adminlogin);
  app.get('/admin/statistic', page.admin.statistic);
  app.get('/admin/medicineinfo', page.admin.medicineinfo);
  app.get('/admin$', page.admin.statistic);
  //app.get('/about', page.about);

};
