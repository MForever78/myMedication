module.exports = {
  login: function(req, res, next) {
    var authData = {
      "username": req.body.username,
      "password": req.body.password,
    };
  }
}
