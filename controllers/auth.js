var pass = require('./pass');

function authenticate(doc, name, passwd, callback) {
  doc.findOne( {username: name}, function(err, user) {
    if (!user) return callback(new Error('cannot find user'));
    pass.hash(passwd, user.salt, function(err, hash) {
      if (err) return callback(err);
      if (hash === user.password) return callback(null, user._id);
      callback(new Error('invalid password'));
    });
  });
}

module.exports = authenticate;

