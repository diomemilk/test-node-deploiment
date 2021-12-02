var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MILKZO a deployer sur hurokou today' });
});

module.exports = router;
