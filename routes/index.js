var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next) {
    res.redirect('/doctors/all');
  });

router.get('/doctors/all',function(req, res, next) {
    res.render('doctors');
  });

router.get('/doctors/:doctorName',function(req, res, next) {
    res.render('profile');
  });

  module.exports = router;
