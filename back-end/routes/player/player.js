var express = require('express');
var router = express.Router();
var passport = require('passport');
var playerController = require('./controller/playerController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Player Route');
});

router.get('/get-player-by-id/:id', passport.authenticate('jwt', { session: false }), playerController.getPlayerByID);

module.exports = router;