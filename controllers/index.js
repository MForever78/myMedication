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
  app.get('/admin', page.admin);
  //app.get('/about', page.about);

};
