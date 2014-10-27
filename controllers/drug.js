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

function addDrug(req, res, next) {
  var drug = new Drugs();
  drug.name = req.body.name;
  drug.description = req.body.description;
  drug.chemical = req.body.chemical;
  drug.save(function(err) {
    if (err) {
      next(err)
    }
    console.log(drug);
    res.redirect('/addDrug');
  });
}

module.exports.query = getDetail;
module.exports.add = addDrug;
