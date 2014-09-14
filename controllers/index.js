var user = require('./user');
var page = require('./page');

module.exports = function(app) {
  
  // user related
  // app.post('/login', user.login);
  // app.get('/logout', user.logout);

  // index
  app.get('/', page.index);
  //app.get('/home', page.home);
  //app.get('/about', page.about);

};
