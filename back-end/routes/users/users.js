var express = require('express');
var router = express.Router();
var userController = require('./controller/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Users Route');
});

// router.get('/users', userController.users);

// router.get('/user/:id', userController.user);

// router.patch('/following/:id', userController.following);

// router.patch('/unfollowing/:id', userController.unfollowing);

// router.patch('/followers/:id', userController.followers);

// router.patch('/unfollowers/:id', userController.unfollowers);

// router.patch('/update/:id', userController.update);

// router.delete('/delete/:id', userController.delete);



router.post('/register', userController.register);

router.post('/login', userController.login);

router.post('/search', userController.search);


module.exports = router;
