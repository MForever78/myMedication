var Drugs = require('../models/drugs');

function getDetail(req, res, next) {
  var name = req.query.name;

  Drugs.findOne(
    { name: name },
    function(err, drug) {
      if (err) {
        next(err);
      }
      console.log(drug);
      res.render('pillDetail', { pageTitle: 'Detail', bodyId: 'user', drug: drug });
    }
  );
}

module.exports = getDetail;
