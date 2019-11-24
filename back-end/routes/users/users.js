var express = require('express');
var router = express.Router();
var userController = require('./controller/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Users Route');
});

router.post('/register', userController.register);

router.post('/login', userController.login);

router.post('/search', userController.search);

module.exports = router;
