var Express = require("express");
var jade = require('jade');
var controller = require('./controllers/index');
var credentials = require('./credentials');

var app = Express();

// set view engine
app.set('views', './views');
app.set('view engine', 'jade');

// set default port: 3000
app.set('port', process.env.PORT || 3000);

// set static directory
app.use(express.static(__dirname + '/public'));

// catch tests
app.use(function(req, res, next) {
  res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
  next();
});

// set logger according to runtime env
switch(app.get('env')) {
  case 'development':
    app.use(require('morgan')('dev'));
    app.set('db', credentials.development.connectionString);
    break;
  case 'production':
    app.use(require('express-logger')({
      path: __dirname + '/log/requests.log'
    }));
    app.set('db', credentials.production.connectionString);
    break;
}

controllers(app);

// start the server
app.listen(app.get('port'), function(){
  console.log( 'Express started in ' + app.get('env') + ' mode on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});

