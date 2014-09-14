module.exports = {
  
  index: function(req, res, next) {
    res.render('index', {pageTitle: 'Topology'});
  },

  login: function(req, res, next) {
    res.render('login', {pageTitle: 'Login - Topology'});
  }

}
