var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.redirect('/doctors/all');
});

router.get('/doctors', function (req, res, next) {
  res.redirect('/doctors/all');
});

router.get('/doctors/all', function (req, res, next) {
  res.render('doctors');
});

router.get('/doctors/error', function (req, res, next) {
  res.render('error');
});

router.get('/doctors/:doctorName', function (req, res, next) {
  res.render('profile');
});

module.exports = router;
