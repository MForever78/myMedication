var Express = require("express");
var jade = require('jade');
var controllers = require('./controllers/index');
var credentials = require('./credentials');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var connect = require('connect');
var compression = require('compression');

var app = Express();

// set view engine
app.set('views', './views');
app.set('view engine', 'jade');

// set default port: 3000
app.set('port', process.env.PORT || 3000);

// set static directory
app.use(Express.static(__dirname + '/public'));

// catch tests
app.use(function(req, res, next) {
  res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
  next();
});

// set logger according to runtime env
switch(app.get('env')) {
  case 'development':
    app.use(require('morgan')('dev'));
    break;
  case 'production':
    app.use(require('express-logger')({
      path: __dirname + '/log/requests.log'
    }));
    break;
}

// Compress response data
app.use(compression());

// connect database according to env
// set `keepAlive` to prevent database connection errors for long-running
var opts = {
  server: {
    socketOptions: { keepAlive: 1 }
  }
};

switch(app.get('env')) {
  case 'development':
    mongoose.connect(credentials.mongo.development.connectionString, opts);
    break;
  case 'production':
    mongoose.connect(credentials.mongo.production.connectionString, opts);
    break;
  default:
    throw new Error('Unknown execution environment: ' + app.get('env'));
}

app.set('db', mongoose.connection);
app.get('db').once('open', function() {
  console.log('Database connected!');
});

// parse body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// cookie parser, use express-session temporarily
app.use(require('cookie-parser')(credentials.cookieSecret));
app.use(require('express-session')());

// router
controllers(app);

// start the server
app.listen(app.get('port'), function(){
  console.log( 'Express started in ' + app.get('env') + ' mode on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});

