var express = require('express');
var router = express.Router();
var passport = require('passport');
var playersController = require('./controller/playersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Players Route');
});

router.get('/get-all-players', passport.authenticate('jwt', { session: false }), playersController.getAllPlayers);

module.exports = router;
