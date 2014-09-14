module.exports = {
  
  index: function(req, res, next) {
    res.render('index', {pageTitle: 'Topology'});
  },

  userlogin: function(req, res, next) {
    res.render('userlogin', {pageTitle: 'User Login - Topology'});
  },

  adminlogin: function(req, res, next) {
    res.render('adminlogin', {pageTitle: 'Administrator Login - Topology'});
  },

  admin: {
      statistic: function(req, res, next) {
        res.render('statistic', {pageTitle: 'Administrator - Topology'});
      },
      medicineinfo: function(req, res, next) {
        res.render('medicineinfo', {pageTitle: 'Medicine Information - Topology'});
      }
  }

}
