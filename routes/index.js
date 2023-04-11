var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/clientes', function(req, res, next) {
  res.render('clientes', { title: 'Express' });
});
router.get('/productos', function(req, res, next) {
  res.render('productos', { title: 'Express' });
});

module.exports = router;
