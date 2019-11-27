var express = require('express');
var router = express.Router();
// var passport = require('passport');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Player Data Route');
});


// router.get('/batting2018', re.send('./batting2018.json'));

module.exports = router;