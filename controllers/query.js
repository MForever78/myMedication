var Drugs = require('../models/drugs');

function query(req, res, next) {
    var search = req.query.search;
    var reg = new RegExp(search + "*", 'i');
    
    Drugs.find(
      {
        $or: [{ name: reg }, { conditions: reg }]
      },
      function(err, docs) {
        if (err) {
          next(err);
        }
        console.log(docs);
        res.render('query', { pageTitle: 'Search', pills: docs, bodyId: 'user', search: search}); 
      }
    );
    
}

module.exports = query;
