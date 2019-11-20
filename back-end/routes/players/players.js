var express = require('express');
var router = express.Router();
// var userController = require('./controller/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Players Route');
});

module.exports = router;
