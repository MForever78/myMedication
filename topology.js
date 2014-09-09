var Express = require("express");
var jade = require('jade');


var app = Express();

// set view engine
app.set('views', './views');
app.set('view engine', 'jade');

// set default port: 3000
app.set('port', process.env.PORT || 3000);

// catch tests
app.use(function(req, res, next) {
  res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
  next();
});

// start the server
app.listen(app.get('port'), function(){
  console.log( 'Express started listiening on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});

